/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BsCheck } from 'react-icons/bs'

import './services.css'

function Service() {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className=" .container services__container">
                {/* <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article> */}


                <article className='service'>
                    <div className="service__head">
                        <h3>web development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Node.js: Expertise in efficient server-side JavaScript.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>API Design: Crafting seamless communication interfaces.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Database Management: Efficient organization and manipulation of data.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Scalability Solutions: Ensuring smooth growth of systems.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Backend Optimization: Enhancing backend processes for optimal performance and more.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p> System Integration: Seamlessly merging different software components and more.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Artificial Intellegence (In training)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Machine Learning Models: Developing advanced predictive algorithms.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Data Preprocessing: Cleaning and transforming data for analysis.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Model Training: Teaching algorithms to make accurate predictions..</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Model Evaluation: Assessing model performance and accuracy.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Image Recognition: Developing models for visual content analysis.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Sentiment Analysis: Assessing opinions and emotions from text data.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Service