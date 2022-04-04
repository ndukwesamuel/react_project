import React from 'react';

const Categories = ({filterItems, allCat}) => {
  return(  <>
   <h2>categories component</h2>

      <div className='btn-container'>

        {allCat.map( (data, index) => {
          return(
             <button key={index} className='filter-btn' onClick={() =>filterItems(data)}> {data}</button>

          )
        })}

      </div>


   </>

  )
};

export default Categories;
