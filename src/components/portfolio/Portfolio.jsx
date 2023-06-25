/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './portfolio.css'
import IMG1 from '../../assets/chatsvg.svg'
import IMG2 from '../../assets/learnzz.webp'
import IMG3 from '../../assets/renbooksvg.svg'
import IMG4 from '../../assets/original-4b6360b10dc3fab58149732793a5ec33.webp'




function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="A chating app " />
                    </div>
                    <h3>An online chatting app</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/Post-it-Api-app" className='btn' target='blank'>Github</a>
                        <a href="https://postit-api-social-app.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="A chating app " />
                    </div>
                    <h3>This is a portfolio Item Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/Post-it-Api-app" className='btn' target='blank'>Github</a>
                        <a href="https://postit-api-social-app.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="A chating app " />
                    </div>
                    <h3>This is a portfolio Item Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/renBook" className='btn' target='blank'>Github</a>
                        <a href="https://renbook.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="A chating app " />
                    </div>
                    <h3>E-commerce api</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/shopty" className='btn' target='blank'>Github</a>
                        <a href="https://postit-api-social-app.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="A chating app " />
                    </div>
                    <h3>This is a portfolio Item Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/giftibe/shopty" className='btn' target='blank'>Github</a>
                        <a href="https://postit-api-social-app.onrender.com" target='blank' className='btn btn-primary'>Live demo</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="A chating app " />
                    </div>
                    <h3>This is a portfolio Item Title</h3>
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