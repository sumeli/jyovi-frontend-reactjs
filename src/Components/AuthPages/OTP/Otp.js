import React, { Component } from "react";
import './otp.css'
import OtpBox from "./OtpBox";
import { ResendOTP } from 'otp-input-react'

const Otp = () => {

    const renderButton = (buttonProps) => {
        return <button {...buttonProps}>Resend</button>;
    };
    const renderTime = (remainingTime) => {
        return <span>{remainingTime} seconds remaining</span>;
    };

    return (
        <div className='otp'>
            <div class="'w-full h-20"></div>
            <div className='flex flex-col rounded-md mx-2 md:mx-36 my-4 md:p-4 border-gray-400 md:border-x md:border-y'>
                <h2>Verify Phone Number</h2>
                <p>OTP sent to +91- 98-----74</p>
                <div className="otp-box">
                    <OtpBox />
                </div>
                <div className="otp-btn">
                    <button>Verify OTP</button>
                </div>
                <div className="resend-box">
                    <ResendOTP renderButton={renderButton} renderTime={renderTime} />
                </div>
            </div>
        </div>
    )
}


export default Otp