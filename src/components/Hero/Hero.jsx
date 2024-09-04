import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {ReactTyped} from 'react-typed';
import './Hero.css'
import profile_img from "../Hero/profile_img (1).png";
const Hero = () => {
  const [isopen, setopen] = useState(false);
  const paragraphStyle = { 
    
   WebkitLineClamp:1,
   webkitBoxOrient:'vertical',
   overflow:'hidden',
   display:'-webkit-box'

};


  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=''/>
      <h3>Hello, It's Me</h3>
      <h1><span>I'm Samuel Diriba</span></h1>
      <div className='animated-type'>
      <h3>And i'm a
        <span className='animated'>
        <ReactTyped
        strings={[
          "Web Developer", 
          "Frontend Developer", 
          "Responsive web Design"]}
        typeSpeed={100}
        backSpeed={100}
        backdelay={1000}
        loop={true}/>
        </span></h3>
      </div>
     

     <p style={isopen ? null : paragraphStyle}>My name is Samuel Diriba. I'm a web developer whith over four years of
     extensive experience. My expertise includes web development, Portfolio builder, and many more.
     This is my new portfolio that i created for my career. I am also learning more about of programming.Reed more about of me...</p>
     <button onClick={() => setopen(!isopen)}>{isopen ? 'Read less...' : 'Read more...'}</button>
     
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className = 'anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
   
  )
}

export default Hero;
