/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './about.css';
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return <section id='about'>
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
                        <small>3+ Years Working Experience</small>
                    </article>

                    <article className='about__card'>
                        <FiUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small>10+ clients Worldwide</small>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon' />
                        <h5>Projects</h5>
                        <small>15+ Completed Projects</small>
                    </article>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt perferendis, qui minima esse accusamus repellendus vitae exercitationem ab, accusantium magni quod cum eum culpa aut explicabo at velit voluptates.
                </p>

                <a href="#contact" className='btn btn-primary'> Let&apos;s Talk</a>

            </div>
        </div>
    </section>;
};

export default About;
