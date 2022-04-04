import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {

  const [showinfo, setShowinfo] = useState(false)
  const show = () => {
      if (showinfo === false){
      setShowinfo(true)
      }
      else{
        setShowinfo(false)
      }
  }
  return (
    
      <article className='question'>

        <header>
        <h2> {title}</h2>
        <button onClick={show} className='btn'>
          {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </button>

        </header>

      {showinfo &&          <p className="info">  {info}</p>
}
      </article>
  )

};

export default Question;
