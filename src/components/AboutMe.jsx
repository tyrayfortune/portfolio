import React from 'react'
import "./Component.css"
const AboutMe = () => {
  return (
    <div id='about_me_container' >
      <div >
      <h3 className='section_title'>About Me:</h3>
      </div>
        <div className='about_me'>
          <div className='paragraph1'>
            <p className='text_size'>I’m a California native who joined the Army when I turned 18. I served for 4 years as a Paratrooper in the 82nd Airborne division at Ft. Bragg. The Army helped instill values such as team building, leadership, and good time management. While it was a great experience, I knew it wasn’t what I wanted for a career.</p>
          </div>
          <div className='paragraph2'>
            <p className='text_size'>After my contract ended in late 2020 I worked a couple different jobs, but I didn’t realize what my passion was until I discovered programming through talking with some clients who were software engineers. They talked about constant problem solving, and out-of-the-box thinking that I love to do. So, I ending up joining a rigorous 14 week coding bootcamp where I put in over 1000 hours of studying and application building. Since graduating I have been continuing my education through personal studies, as well as in an academic matter. I am currently a student at CityU of Seattle, going for my BA in Applied Computing. </p>
          </div>
          <div className='paragraph3'>
            <p className='text_size'>In my spare time outside web development, I love all sorts of gaming, seeing the different sites that the PNW has to offer, or catching up on tv shows.</p>
          </div>
      </div>
    </div>
  )
}

export default AboutMe