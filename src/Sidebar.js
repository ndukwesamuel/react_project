import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>

      <div className="sidebar-header">
        <img src={logo} className={logo} alt="conding adict" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map( (data, index_data) => {
          const {id , icon , text, url } = data


              return(
                <li key={id}>
                  <a href={url}>
                    {icon}
                    {text}
                  </a>

                </li>
              )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
