/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import CV from '../../assets/RECENT_cv.pdf'

const Cta = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let&apos;s talk</a>
        </div>
    )
}


export default Cta