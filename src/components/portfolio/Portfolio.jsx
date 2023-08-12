/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './portfolio.css'
import IMG1 from '../../assets/chatsvg.svg'
import IMG2 from '../../assets/learnzz.webp'
import IMG3 from '../../assets/renbooksvg.svg'
import IMG5 from "../../assets/crypto.jpg"
import IMG6 from "../../assets/HOTEL.jpg"
import IMG7 from "../../assets/review.jpg"


function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="A social media app " />
                    </div>
                    <h3>An online chatting app</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/Post-it-Api-app" className='btn' target='blank'>Github</a>
                        <a href="https://postit-api-social-app.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="Ecommerce website" />
                    </div>
                    <h3>A shopping/ecommerce website</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/shopty" className='btn' target='blank'>Github</a>
                        <a href="https://github.com/giftibe/shopty" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="A book renting api" />
                    </div>
                    <h3>A book renting api</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/renBook" className='btn' target='blank'>Github</a>
                        <a href="https://renbook.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="A crypto currency exchange platform " />
                    </div>
                    <h3>A cryptocurrency exchange api</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/slate" className='btn' target='blank'>Github</a>
                        <a href="https://github.com/giftibe/slate" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="A hotel renting api" />
                    </div>
                    <h3>Hotel renting Api</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/Hotel-Management-Api-V2.0-TypeScript" className='btn' target='blank'>Github</a>
                        <a href="https://github.com/giftibe/Hotel-Management-Api-V2.0-TypeScript" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG7} alt="A review section of an app " />
                    </div>
                    <h3>Review website</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/shopty" className='btn' target='blank'>Github</a>
                        <a href="https://postit-api-social-app.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>
            </div>
        </section>
    )
}

export default Portfolio