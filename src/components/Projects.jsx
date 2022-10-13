
import React from 'react'
import helping_hand_project from '../images/helping_hand_project.png'
import veteran_project from '../images/veteran_project.png'
import minesweeper_project from '../images/minesweeper_project.png'

const Projects = () => {
  return (
  <div id='projects_container'>
    <h3 className='personal_projects_title section_title'>Personal Projects:</h3>
    {/* row is main container for all columns */}
    <div class="row">
      <div class="column">
        <div className='image_div'>
          <img className='project_images' src={helping_hand_project} alt="json icon" />
          {/* two classnames to get overlary + blur affect */}
          <div className='image_overlay image_overlay--blur'>
            <div className='image_title'>Helping Hand</div>
            <p className='image_description'>Helping Hand is a full stack project ment to give reasources
            and a means of communication to those struggling.</p>
            <a href="https://github.com/tyrayfortune/coding_projects/tree/master/MERN%20Projects/HelpingHand"><button className='project_button'> <h5 className='button_text'>Source Code</h5></button></a>
          </div>
        </div>
      </div>
      <div class="column">
      <div className='image_div'>
          <img className='project_images' src={veteran_project} alt="json icon" />
          <div className='image_overlay image_overlay--blur'>
            <div className='image_title'>Veterans Help</div>
            <p className='image_description'>Designed to provide the opportunity for users to share their personal stories, 
            along with a variety of useful resources. </p>
            <a href="https://github.com/tyrayfortune/java_project"><button className='project_button'> <h5 className='button_text'>Source Code</h5></button></a>
          </div>
        </div>
      </div>
      <div class="column">
        <div className='image_div'>
            <img className='project_images' src={minesweeper_project} alt="json icon" />
            <div className='image_overlay image_overlay--blur'>
              <div className='image_title'>Minesweeper</div>
              <p className='image_description'>One of the most Iconic games, Minesweeper!</p>
              <a href="https://github.com/tyrayfortune/coding_projects/tree/master/Python%20Projects"><button className='project_button'> <h5 className='button_text'>Source Code</h5></button></a>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Projects