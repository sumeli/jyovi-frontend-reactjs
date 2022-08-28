import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ProfCards from './ProfCards'
import './profession.css'

const Profession = () => {
  return (
    <div className='profession'>
        <Navbar />
        <div class="'w-full h-28"></div>
        <ProfCards />
        <Footer />
    </div>
  )
}

export default Profession