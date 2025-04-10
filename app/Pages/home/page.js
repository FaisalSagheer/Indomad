import React, { useRef } from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
// import Stats from '../components/Stats'
import About from '../../components/About'
import Form from '../../components/Form'
// import Info from '../../components/Info'
// import Products from '../components/Products'
import Footer from '../../components/Footer'
import ProductsSection from '../../components/Products'
export default function Home() {
    const contactRef = useRef(null)
    return (
        <div>

            {/* <Info /> */}
            <Navbar contactRef = {contactRef}/>
            <Hero />
            {/* <Stats /> */}
            <About />
            <ProductsSection/>
            {/* <ChooseUs/> */}
            {/* <ServicesSection/> */}
            {/* <Testimonials/> */}
            <Form ref = {contactRef}/>
            <Footer/>
        </div>
    )
}
