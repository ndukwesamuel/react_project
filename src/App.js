import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading, setloading] = useState(true)
  const [job, setJob] = useState([])
  const [value, setValue] = useState( 0)

  const getDta = async() => {
      const res = await fetch(url)
      const newJob = await res.json()
      console.log(newJob);

      setJob(newJob)
      setloading(false)

  }

  useEffect(() => {
  
    getDta()
    return () => {
      
    }
  }, [])

  if(loading){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const {company, dates, duties, id, title, order} = job[value]
  
  return(
    <> 

      {job && <div className='section '>

           <div className='title'>
             <h1> experience</h1>
             <div className='underline'></div>

             <div className='job-center'>


               <article className='job-info'>
                 <div className="btn-container">
                   {job.map(  (data, index) => {
                      return(
                          <button key={data.id} onClick={() => setValue(index)}>
                            {data.company}
                          </button>
                      )
                   })}
                 </div>
                 <h3>{title}</h3>
                 <p className='job-date'>{dates}</p>
                 <div>
                   {duties.map((data, index) => {
                      
                      return(
                            <div key={index} className='job-desc'>
                                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                                <p>{data}</p>
                             </div>
                      )
                     }
                   )}
                 </div>
               </article>
             </div>
           </div>







      </div> }
      
    
    </>
  )
}

export default App
