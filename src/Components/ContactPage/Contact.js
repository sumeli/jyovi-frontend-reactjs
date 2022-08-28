import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ContactForm from './ContactForm'

const Contact = () => {

    return (
        <div>
            <Navbar />
            <div class="'w-full h-28"></div>
            <div>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact