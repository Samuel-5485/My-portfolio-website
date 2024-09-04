import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer_logo} alt=''/>
                <p>Follow Me:</p>
                <div className='social-media-links'>
                  <a href='https://linkedin.com/in/samuel-diriba-516b4b296/' target='_blank' rel='noonpener noreferrer' aria-label='Linkedin'>
                  <FontAwesomeIcon icon={faLinkedin} /> </a>
                  <a href='https://x.com/Samuel54855281' target='_blank' rel='noonpener noreferrer' aria-label='Twitter'>
                  <FontAwesomeIcon icon={faTwitter}/>
                  </a>
                  <a href='https://github.com/Samuel-5485' target='_blank' rel='noonpener noreferrer' aria-label='Github'>
                  <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </div>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt=''/>
                    <input type='email'placeholder='Enter your email'/>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
      <hr/>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>ⓒ 2024 Samuel Diriba. All rights reserved.</p>
      
      <div className='footer-bottom-right'>
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
