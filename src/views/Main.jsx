import React from 'react'
import Navbar from "../components/Navbar";
import Title from "../components/Title"
import AboutMe from "../components/AboutMe"
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import ContactInfo from '../components/ContactInfo';


const Main = () => {
  return (
    <div>
      <Navbar/>
      <Title/>
      <AboutMe/>
      <Expertise/>
      <Projects/>
      <ContactInfo/>
    </div>
  )
}

export default Main