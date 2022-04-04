import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {name, job , image, text} = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };



    const prev = () => {

      setIndex( index => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    
      })



    }


    const next_btn = () => {

      setIndex(index => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      })


    }

    const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber = index + 1;
      }
      setIndex(checkNumber(randomNumber));
    };


  return(

    <div className='review'> 
      <div className="img-container">

        <img src={image} alt={name}  className="person-img"/>
        <span className='quote-icon'>
        <FaQuoteRight />

        </span>
      </div>


        <h4 className='author'>{name} </h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

      <div className="button-container"> 

        <button onClick={prev} className="prev-btn">
        <FaChevronLeft />

        </button>

        <button onClick={randomPerson} className="random-btn">
suprise me
        </button>

        <button onClick={next_btn} className="next-btn">
        <FaChevronRight />

        </button>

        

      </div>    
    </div>
  )

};

export default Review;
