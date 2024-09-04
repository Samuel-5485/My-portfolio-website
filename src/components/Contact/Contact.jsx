import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "eac42afe-5581-46eb-8958-a0a98f1b8a31");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact'className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern}alt=''/>
        </div>
      <div className='contact-sections'>
        <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects and am eager to bring innovative ideas to life. 
              If you have a project in mind or need assistance with web development, feel free to get in touch. 
              I am enthusiastic about collaborating and helping you achieve your goals. Let's create something amazing together!</p>
            <div className='contact-details'>
               <p>If you'd like to get in touch, you can reach me through the following methods:</p> 
                
                <div className='contact-detail'>
                   <ul>
                    <li>
                    <a href='mailto:samediriba54@gmail.com?subject=Subject%20Here&body=Message%20Here'>
                    <FontAwesomeIcon icon={faEnvelope} /> Email Me</a>
                        </li>
                    <div className='contact-detail'>
                  <li>
                    <a href='tel:+251954855281' >
                  <FontAwesomeIcon icon={faPhone} /> Call Me</a> 
                    </li>
                    </div>
                    <li> 
                    <div className='contact-detail'>
                    <a href='https://www.google.com/maps?q=Addis Ababa,+Ethiopia' target='_blank' rel='noonpener noreferrer'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Find My Location</a></div></li>
                          </ul>
                    </div>
            </div>
        </div>
      <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor=''>Your Name</label>
        <input type="text"placeholder='Enter your name' name='name'/>
        <label htmlFor=''>Your Email</label>
        <input type='email'placeholder='Enter your email'name='email'/>
        <label htmlFor=''>Write your message here</label>
        <textarea name='message'rows='8'placeholder='Enter your message'></textarea>
       <button type='submit'className='contact-submit'>Submit Now</button>  
      </form>
      </div> </div>
   
  )
}

export default Contact
