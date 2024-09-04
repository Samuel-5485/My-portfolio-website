import React, { useState } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../About/about_ profile.jpg'
const About = () => {
  const [isopen, setopen] = useState(false);
   const paragraphstyle = { 
    WebkitLineClamp:3,
    webkitBoxOrient:'vertical',
    overflow:'hidden',
    display:'-webkit-box'
   
 };

  return (
    <div id='about'className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className ='about-sections'>
        <div className='about-left'>
            <img src={profile_img}alt=''/>
            </div>
        <div className='about-right'>
            <div className = 'about-para'>
              
            <p 
            style={isopen ? null : paragraphstyle}>
              Hello! My name is Samuel Diriba Yadeta. I was born on November 11, 2003 G.C,
 in Nedjo City, Oromya, Ethiopia.From grade one up to six(1-6),
 I attended school in Nedjo City, and from grade seven up to 
 twelve(7-12), I attended school in Shager City, Addis Ababa. 
 I am currently studying at Ambo University. The information above provides a brief history of my 
 background.

 I am an experienced web developer and am also studying 
 Artificial Intelligence Career Essentials at ALX. I have been certified by freeCodeCamp in
 Responsive Web Design, and I participated in the A2SV Hackathon 
 within my team, Were we were certified for the Quarterfinals in August 2024.
 I am currently attending courses at Ambo University, and I aspire to become software engineer.</p>

 <button onClick={() => setopen(!isopen)}>{isopen ? 'reed less...' : 'reed more...'}</button>

<div class='job-experience'>
  <h3>Full Stack Web developer (Upcoming)</h3>
  <h4>Prodigy InfoTech</h4>
  <p>Expected Start Date:  August 15, 2024</p>
  <p>Expected End Date: September 15, 2024</p>
  <ul>
    <li>Will work on developing scalable web applications using modern technologies.</li>
    <li>Focus on both frontend and backend development.</li>
    <li>I recieved an offer letter from Prodigy InfoTech for Full-Stack Web Developer role.</li>
  </ul>
 
</div>
              
              </div>
           <div className = 'about-skills'>
            <div className = 'about-skill'><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
            <div className = 'about-skill'><p>JavaScript</p><hr style={{width:"70%"}}/></div>
            <div className = 'about-skill'><p>React JS</p><hr style={{width:"60%"}}/></div>
            <div className = 'about-skill'><p>Python</p><hr style={{width:"55%"}}/></div>
      </div>
      </div></div>
      
    <div className='about-achivements'>
        <div className='about-achivement'>
            <h1>5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div> 
        <hr/>
        <div className='about-achivement'>
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
    </div>
   <hr/>
        <div className='about-achivement'>
            <h1>5+</h1>
            <p>CERTIFICATE EARNED</p>
           
    
    </div> 
    </div>
    </div>
  )
}

export default About
