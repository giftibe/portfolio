/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'


import './header.css'
import CTA from './CTA'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I&apos;m</h5>
                <h1>Gift Ibe</h1>
                <h5 className='text-light'>Backend Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>

        </header >
    )
}

export default Header