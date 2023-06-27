/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>giftibe62@gmail.com</h5>
                        <a href="mailto:giftibe62@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Gift Ibe</h5>
                        <a href="https://www.linkedin.com/in/gift-ibe" target="_blank" rel="noopener noreferrer" >Connect with Me</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>Gift Ibe</h5>
                        <a href="https://api.whatsapp.com/send?phone=2347038698600" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact