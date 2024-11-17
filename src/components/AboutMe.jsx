import React from 'react'
import "./Component.css"
const AboutMe = () => {
  return (
    <div id='about_me_container' >
      <div >
      <h3 className='section_title'>About Me:</h3>
      </div>
        <div className='about_me'>
          <div className=''>
            <p className='text_size'>Hello! I'm Tyray Fortune, a software engineer whose journey began with a love for problem-solving sparked by childhood science experiments with my mother, an Application Analyst. Growing up in California, I developed an analytical mindset and a passion for exploring innovative solutions. My time as a Team Leader in the U.S. Army further taught me resilience, adaptability, and the value of teamwork—skills that have become the backbone of my professional approach to software development.</p>
          </div>
          <div className=''>
            <p className='text_size'>My coding journey took off at <b>Coding Dojo</b>, where I completed an intensive full-stack development program. I then pursued a <b>BS in Applied Computer Science at City University of Seattle</b>, excelling academically as President of the Tech Club and consistently making the Dean's List. Professionally, I've contributed as a <b>Software Engineer Intern at Credit Acceptance</b>—twice—where I built reusable Angular components, optimized web pages for performance and ADA compliance, and collaborated closely with teams to deliver high-quality, scalable solutions. These experiences deepened my technical expertise and commitment to user-centric design and accessibility.</p>
          </div>
          <div className=''>
            <p className='text_size'>I'm skilled in <b>JavaScript, TypeScript, Python, Angular, React</b>, and tools like <b>AWS, Jenkins, and Jira</b>. Beyond the code, I value collaboration, communication, and lifelong learning. I'm excited to contribute my experience and passion for creating technology that not only performs but inspires. I look forward to joining forward-thinking teams where innovation meets empathy, and we can build impactful solutions together.</p>
          </div>
      </div>
    </div>
  )
}

export default AboutMe