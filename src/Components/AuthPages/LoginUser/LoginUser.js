import React from 'react'
import { Link } from 'react-router-dom'
import Phonecode from '../SignupUser/Phonecode'
import './loginuser.css'

const LoginUser = () => {
  return (
    <div className='login-user'>
      <div className='sign-up-user'>
        <div class="'w-full h-20"></div>
        <div class="flex flex-col rounded-md mx-2 md:mx-36 my-4 md:p-4 border-gray-400 md:border-x md:border-y">
          <h2 style={{ "marginBottom": "20px" }}>Log In</h2>

          <form>
            <div class="grid md:grid-cols-1 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <Phonecode />
              </div>

            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-lavender dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/otp/customer">Get OTP</Link></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginUser