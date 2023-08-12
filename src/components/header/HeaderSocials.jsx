/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/gift-ibe" target='blank'><BsLinkedin /></a>
            <a href="https://github.com/giftibe" target='blank'><FaGithub /></a>
            <a href="https://twitter.com/Gift_dev" target=' blank'><GrTwitter /></a>
        </div>
    )
}

export default HeaderSocials