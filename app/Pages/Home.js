import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
// import Stats from '../components/Stats'
import About from '../components/About'
import Form from '../components/Form'
import Info from '../components/Info'
// import Products from '../components/Products'
import Footer from '../components/Footer'
import ChooseUs from '../components/ChooseUs'
import ProductsSection from '../components/Products'
// import Testimonials from '../components/Testimonials'
import ServicesSection from '../components/Service'

export default function Home() {
    return (
        <div className=''>
            <Info />
            <Navbar />
            <Hero />
            {/* <Stats /> */}
            <About />
            <ProductsSection/>
            <ChooseUs/>
            <ServicesSection/>
            {/* <Testimonials/> */}
            <Form />
            <Footer/>
        </div>
    )
}
