import React from 'react'
import github_icon from '../images/github_icon.png'
import linkedin_icon from '../images/linkedin_icon.png'
import resume_icon from '../images/resume_icon.png'

const ContactInfo = () => {
  return (
    <div id='contact_info_container'>
        <div className='contact_info_title'><h3 className='section_title'>Contact Info:</h3></div>
            <table className='info_table'>
                <tr>
                    <th><h4>Phone</h4></th>
                    <th><h4>Email</h4></th>
                </tr>
                <tr>
                    <td className='text_size'>910-885-5234</td>
                    <td className='text_size'>tyrayafortune@yahoo.com</td>
                </tr>
            </table>
        <div className='social_links'>
            <div className='social_link'>
                <a href="https://github.com/tyrayfortune"><img className='social_images' src={github_icon} alt="github icon" /></a>
            </div>
            <div className='social_link'>
                <a href="https://www.linkedin.com/in/tyray-fortune/"><img className='social_images' src={linkedin_icon} alt="linkedin icon" /></a>
            </div>
            <div className='social_link'>
                <a href="https://drive.google.com/file/d/1M8SYPJaxy4QWqTvMwXgJVaagDs-RCkjn/view"><img className='social_images' src={resume_icon} alt="pdf icon" /></a>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo