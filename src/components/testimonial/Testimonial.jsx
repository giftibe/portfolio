/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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

            <Swiper className='container testimonials__container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={client1} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>Victor O.</h5>
                    <small className='client__review'>Demonstrating extensive Node.js expertise, our app&apos;s backend underwent a revolutionary shift with remarkable contributions. Gift&apos;s inventive API design notably streamlined user interactions, significantly enhancing overall user experience.</small>
                </SwiperSlide>

                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={client2} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>Priscilla Elli</h5>
                    <small className='client__review'>Remarkably enhancing data organization and system performance,His adept handling of database management proved pivotal in our collaboration with insights truly invaluable.</small>
                </SwiperSlide>

                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={client3} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>Kwame Young</h5>
                    <small className='client__review'>Evident in the optimized backend&apos;s remarkable speed enhancements, His expertise working with my team creating a seamless integration was prominent. Having commitment and dedication to excellence; truly commendable.</small>
                </SwiperSlide>

                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={client4} alt="Client faces" />
                    </div>
                    <h5 className='client__name'>Canvas Glee</h5>
                    <small className='client__review'>Invaluable code performance improvements and proactive error handling showcased his professionalism and eye for details.</small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonial