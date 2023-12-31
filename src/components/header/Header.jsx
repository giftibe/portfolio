/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'


import './header.css'
import Cta from './CTA'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I&apos;m</h5>
                <h1>Gift Ibe</h1>
                <h5 className='text-light'>Software Developer ( BACKEND )</h5>
                <Cta />
                <HeaderSocials />
                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>

        </header >
    )
}

export default Header