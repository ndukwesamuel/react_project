import React, { useState } from 'react'





function TourList({DATAS, Load}) {

    const [test, setTest] = useState(DATAS)

    const Not_int = (id) => {
        const newTours = test.filter((tour) => tour.id !== id)
        setTest(newTours)
      }


  return (
    <div>TourList



        <div> {test.map(
            (item) => {
                const {id, name, info, image, price}  = item
                return(
                    <div key={id}>
                        <h1> {name}</h1>

                        <p> {info}</p>
                        <img className='img-fluid' src={image} alt="" />
                        <h4>{price}</h4>

                        <button onClick={() => Not_int(id)} > on intrested </button>
                    </div>
                )   

            }
        )}</div>
    </div>

        
  
  )}
export default TourList