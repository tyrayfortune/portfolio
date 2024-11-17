import React from 'react'
import javascript_icon from '../images/javascript_icon.png'
import react_icon from '../images/react_icon.png'
import nodejs_icon from '../images/nodejs_icon.png'
import html5_icon from '../images/html5_icon.png'
import css3_icon from '../images/css3_icon.png'
import socket_io_icon from '../images/socket_io_icon.png'
import bootstrap_icon from '../images/bootstrap_icon.png'
import angular_icon from '../images/angular_icon.png'
import jira_icon from '../images/jira_icon.jfif'
import aws_icon from '../images/aws_icon.png'
import jenkins_icon from '../images/jenkins_icon.png'
import json_icon from '../images/json_icon.png'



const Expertise = () => {
  return (
    <div id='expertise_container'>
        <div>
            <h3 className=' section_title'>My Expertise:</h3>
        </div>
        {/* column using bootstrap to hold your icon elements for your expertise portion */}
        <div class="row">
            {/* COLUMN ONE */}
            <div class="col-sm">
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={javascript_icon} alt="javascript icon" /></div>
                    <div className='column_attributes'><h3>JAVASCRIPT</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={html5_icon} alt="html5 icon" /></div>
                    <div className='column_attributes'><h3>HTML</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={bootstrap_icon} alt="bootstrap icon" /></div>
                    <div className='column_attributes'><h3>BOOTSTRAP</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={jenkins_icon} alt="jenkins icon" /></div>
                    <div className='column_attributes'><h3>JENKINS</h3></div>
                </div>
            </div>
            {/* COLUMN TWO */}
            <div class="col-sm">
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={angular_icon} alt="angular icon" /></div>
                    <div className='column_attributes'><h3>ANGULAR</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={css3_icon} alt="css3 icon" /></div>
                    <div className='column_attributes'><h3>CSS</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={json_icon} alt="JSON icon" /></div>
                    <div className='column_attributes'><h3>JSON</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={jira_icon} alt="jira icon" /></div>
                    <div className='column_attributes'><h3>JIRA</h3></div>
                </div>
            </div>
            {/* COLUMN THREE */}
            <div class="col-sm">
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={react_icon} alt="react icon" /></div>
                    <div className='column_attributes'><h3>REACT</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={aws_icon} alt="aws icon" /></div>
                    <div className='column_attributes'><h3>AWS</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={nodejs_icon} alt="nodejs icon" /></div>
                    <div className='column_attributes'><h3>NODE.JS</h3></div>
                </div>
                <div className='image-and-text-holder'>
                    <div className='column_attributes'><img className='icon_images' src={socket_io_icon} alt="socket.io icon" /></div>
                    <div className='column_attributes'><h3>SOCKET.IO</h3></div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Expertise