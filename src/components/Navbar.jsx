import React from 'react'
import {Link} from "react-router-dom"
import "./Component.css"
const Navbar = () => {
  return (
    <div >
      <div className='navbar_alignment'>
        <Link className="nav-link" to="/"> <h3 >Home</h3> </Link>
        <Link className="nav-link" to="/"> <h3 >Home</h3> </Link>
        <Link className="nav-link" to="/"> <h3 >Home</h3> </Link>
      </div>
    </div>
  )
}

export default Navbar