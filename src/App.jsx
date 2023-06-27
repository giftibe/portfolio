// import { useState } from 'react'

import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'

import Service from './components/service/Service.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonial from './components/testimonial/Testimonial.jsx'

import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App