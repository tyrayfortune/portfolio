import React from 'react'
import Tyray from "../images/Tyray.jpg"
import "./Component.css"

const Title = () => {
  return (
    <div>
        <div className='title'>
            <h1 className='name'>Tyray</h1>
            <h2 className='test'>test</h2>
            <img className='profile_image' src={Tyray} alt="profile_photo" />
        </div>

    </div>
  )
}

export default Title