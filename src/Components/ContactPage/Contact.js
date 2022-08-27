import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ContactForm from './ContactForm'
import LoginConfirm from './LoginConfirm'

const Contact = () => {

    const [isloggedin, setIsLoggedIn] = useState(true)

    return (
        <div>
            <Navbar />
            <div class="'w-full h-28"></div>
            <div>
                {isloggedin ? <ContactForm />  : <LoginConfirm />}
            </div>
            <Footer />
        </div>
    )
}

export default Contact