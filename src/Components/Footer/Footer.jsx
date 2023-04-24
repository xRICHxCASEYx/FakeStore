import React from 'react'
import './Footer.css'
import { AiFillHeart } from 'react-icons/ai';

function Footer() {
  return (
     <div className='footer-container'>
        <h4>Made with <AiFillHeart /> by Rich Casey</h4>
        <button className='contact-btn'>Contact Us</button>
     </div>
  )
}

export default Footer