/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './about.css';
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return <section id='about' className='about__section'>
        <h5>Get to know</h5>
        <h2>About me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>4+ Years Working Experience</small>
                    </article>

                    <article className='about__card'>
                        <FiUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small>10+ clients Worldwide</small>
                    </article>

                    {/* <article className='about__card'>
                        <VscFolderLibrary className='about__icon' />
                        <h5>Projects</h5>
                        <small>15+ Completed Projects</small>
                    </article> */}
                </div>

                <p>I am Gift, a skilled backend developer with expertise in Node.js. Proficient in crafting efficient server-side solutions, I excel in API design, database management, and ensuring scalability. My commitment to staying current with industry trends guarantees innovative and dependable outcomes. Let us collaborate to bring your ideas to life and contribute to the advancement of web development.</p>

                <a href="#contact" className='btn btn-primary'> Let&apos;s Talk</a>

            </div>
        </div>
    </section>;
};

export default About;
