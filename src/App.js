import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './Components/ExpertsProfile/ExpertsMain'
import Home from './Components/Home/Home'
import TalkAstrologer from './Components/TalkWithAnAstrologer/TalkAstrologer'
import Contact from './Components/ContactPage/Contact'
import LoginConfirm from './Components/ContactPage/LoginConfirm'
import Submitted from './Components/ContactPage/Submitted'
import LoginUser from './Components/AuthPages/LoginUser/LoginUser'
import SignUpUser from './Components/AuthPages/SignupUser/SignUpUser'
import Otp from './Components/AuthPages/OTP/Otp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/talkWithAstrologer' element={<TalkAstrologer />} />
        <Route path='/expertsProfile' element={<Main />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/loginConfirm' element={<LoginConfirm />} />
        <Route path='/submitted' element={<Submitted />} />
        <Route path='/signup/customer' element={<SignUpUser />} />
        <Route path='/login/customer' element={<LoginUser />} />
        <Route path='/otp/customer' element={<Otp />} />
      </Routes>
    </div>
  )
}

export default App