import React, { useState } from 'react'
import './home.css'
import logo from '../../Img/logo.jpg'
import menuSymbol from '../../Img/menu-symbol-svgrepo-com.svg'
import Carousel from './Carousel'
import Carousell from './Carousel'
import CradCarousel from './CradCarousel'
import WhyJovi from './WhyJovi'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Home = () => {

    return (
        <div className='home'>
            <Navbar />
            {/* <!-- Hero --> */}
            <div class="w-full h-24"></div>
            <div>
                <Carousell />
            </div>

            <div>
                <CradCarousel />
            </div>
            <div>
                <WhyJovi />
            </div>
            <Footer />
        </div >
    )
}

export default Home
