import React, { useState } from 'react'
import data from './data'


import './BirthList.css';

function BirthList() {

  const [dat, setDat] = useState(data)
  


  const handleDele = (id) => {
    const newTours = data.filter((tour) => tour.id !== id)
    console.log(newTours);
    setDat(newTours)
  }

  

  return (
    <div>


        <h1> this is working </h1>

        <div className='birthday'> {dat.map( 
          (item) => {
            const {name, id, age, image } = item
              return(
                <div  key={id} >

                  <h1> {name}</h1>
                  <h2> {age}</h2>
                  <img  className='img-fluid' src={image} alt="" />
                  <button onClick={() => handleDele(id)}>delete</button>

                </div>
          
              
              )
          }
        )}</div>
        
            <button onClick={() => setDat([]) }> clear</button>


    </div>
  )
}

export default BirthList