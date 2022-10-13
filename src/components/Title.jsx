import React from 'react'
import Tyray from "../images/Tyray.jpg"
import "./Component.css"

const Title = () => {
  return (
    <div className='title_container'>
        <div className='title'>
            <h1 className='name'>Tyray</h1>
            <h1 className='name'>Fortune</h1>
            <h2>Full Stack Web Developer</h2>
            {/* image */}
            <img className='profile_image' src={Tyray} alt="profile_photo" />
            
        </div>

    </div>
  )
}

export default Title