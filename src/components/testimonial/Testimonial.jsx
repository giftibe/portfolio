/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './testimonial.css'
import client1 from '../../assets/1548769492045.jpeg'
import client2 from '../../assets/client2.jpeg'
import client3 from '../../assets/client3.jpeg'
import client4 from '../../assets/client4.jpeg'

function Testimonial() {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className='container testimonials__container'>
                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={client1} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod, recusandae omnis voluptatibus repellendus dolores? Ratione qui porro, rem officia laudantium cumque, vero ipsam labore exercitationem excepturi, corporis dolores sed.</small>
                </article>

                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={client2} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod, recusandae omnis voluptatibus repellendus dolores? Ratione qui porro, rem officia laudantium cumque, vero ipsam labore exercitationem excepturi, corporis dolores sed.</small>
                </article>

                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={client3} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod, recusandae omnis voluptatibus repellendus dolores? Ratione qui porro, rem officia laudantium cumque, vero ipsam labore exercitationem excepturi, corporis dolores sed.</small>
                </article>

                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={client4} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>canvas Glee</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod, recusandae omnis voluptatibus repellendus dolores? Ratione qui porro, rem officia laudantium cumque, vero ipsam labore exercitationem excepturi, corporis dolores sed.</small>
                </article>
            </div>
        </section>
    )
}

export default Testimonial