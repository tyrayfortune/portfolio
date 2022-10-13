import React from 'react'
import {Link} from "react-router-dom"
import "./Component.css"
const Navbar = () => {
  return (
    <div id="navbar_container">
      <div className='navbar_alignment'>
        <a className="nav-link" href="#projects_container"><h4>Projects</h4></a>
        <a className="nav-link" href="#expertise_container"><h4>Expertise</h4></a>
        <a className="nav-link" href="#about_me_container"><h4>About Me</h4></a>
      </div>
    </div>
  )
}

export default Navbar