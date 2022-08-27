import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ExperstProfile from './ExperstProfile'
import './expertsProfile.css'

const Main = () => {
  return (
    <div className='main'>
        <Navbar />
        <ExperstProfile />
        <Footer />
    </div>
  )
}

export default Main