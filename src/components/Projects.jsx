import React from 'react'
import CA_img1 from '../images/CA_img1.jpg'
import CA_img3 from '../images/CA_img3.jpg'
import TCT_img1 from '../images/TCT_img1.jpg'

const Projects = () => {
  return (
  <div id='projects_container'>
    <h3 className='personal_projects_title section_title'>Projects:</h3>
    {/* row is main container for all columns */}
    <div class="row row-padding">
      <div class="column">
        <div className='image_div'>
          <img className='project_images' src={TCT_img1} alt="Turbo Click Tracker Information" />
          {/* two classnames to get overlary + blur affect */}
          <div className='image_overlay image_overlay--blur'>
            <div className='image_title'>Turbo Click Tracker</div>
            <p className='image_description'>Designed and developed TurboClickTracker, an interactive Angular web app that measures user clicks per second. Implemented real-time data processing, optimized performance, and deployed the site using AWS Amplify for seamless user experience.</p>
            <a href="https://www.turboclicktracker.com"><button className='project_button'> <h5 className='button_text'>View Website</h5></button></a>
          </div>
        </div>
      </div>
      <div class="column">
      <div className='image_div'>
          <img className='project_images' src={CA_img1} alt="credit acceptance project" />
          <div className='image_overlay image_overlay--blur'>
            <div className='image_title'>Video Component</div>
            <p className='image_description'>Developed during my internship at Credit Acceptance. A custom video component made from scratch using Vimeo's API to build an interactive showcase. Enabled seamless user navigation through a playlist with clickable videos, ensuring an engaging and user-friendly multimedia experience.</p>
            <a href="https://www.creditacceptance.com/car-buyers/videos"><button className='project_button'> <h5 className='button_text'>View Live Component</h5></button></a>
          </div>
        </div>
      </div>
      <div class="column">
        <div className='image_div'>
            <img className='project_images' src={CA_img3} alt="faq component" />
            <div className='image_overlay image_overlay--blur'>
              <div className='image_title'>FAQ Component</div>
              <p className='image_description'>Developed during my internship at Credit Acceptance. Built a dynamic FAQ component from scratch, featuring an interactive open/close functionality for seamless user experience. This component is utilized across multiple pages to enhance navigation and information access</p>
              <a href="https://www.creditacceptance.com/customers/faq"><button className='project_button'> <h5 className='button_text'>View Live Component</h5></button></a>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Projects