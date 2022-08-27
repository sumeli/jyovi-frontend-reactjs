import React from 'react'
import './success.css'
import {FaCheckCircle} from 'react-icons/fa'

const Success = () => {
    return (
        <div className='success'>
            <FaCheckCircle />
            <h2>
                Thank You for showing interest in joining Jyovi.com as a proffessional.
                <br />
                Your Application Details will be verified within 7 days.
                On Approval of your application you will be notified appropriate Communication Channel.
            </h2>
        </div>
    )
}

export default Success