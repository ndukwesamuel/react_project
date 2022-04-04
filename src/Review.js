import React, { useState } from 'react'
import Question from './Question'
import data from './data'


function Review() {

  const [question, setQuestion] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {question.map((data) => {
            return (

              <Question key={data.id} {...data}></Question>
            );
          })}
        </section>
      </div>
    </main>
  )
}

export default Review