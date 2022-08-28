import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './Components/ExpertsProfile/ExpertsMain'
import Home from './Components/Home/Home'
import TalkAstrologer from './Components/TalkWithAnAstrologer/TalkAstrologer'
import Contact from './Components/ContactPage/Contact'
import Submitted from './Components/ContactPage/Submitted'
import LoginUser from './Components/AuthPages/LoginUser/LoginUser'
import SignUpUser from './Components/AuthPages/SignupUser/SignUpUser'
import Otp from './Components/AuthPages/OTP/Otp'
import Check from './Components/AuthPages/Check/Check'
import SignUpExperts from './Components/AuthPages/SignUpExperts/SignUpExperts'
import OtpExperts from './Components/AuthPages/OTP/OtpExperts'
import Page2 from './Components/AuthPages/SignUpExperts/Page2'
import Page3 from './Components/AuthPages/SignUpExperts/Page3'
import Success from './Components/AuthPages/SignUpExperts/Success'
import Profession from './Components/Professions/Profession'
import DataState from './Context/datas/DataState'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <DataState>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experts/:id' element={<Main />} />
          <Route path='/contact' element={<Contact />} />

          {/* Same for customer and expert */}
          <Route path='/login' element={<LoginUser />} />

          <Route path='/signup/customer' element={<SignUpUser />} />
          <Route path='/signup/expert' element={<SignUpExperts />} />

          <Route path='/professions' element={<Profession />} />
          <Route path='/professions/:id' element={<TalkAstrologer />} />

          <Route path='/submitted' element={<Submitted />} />
          <Route path='/check' element={<Check />} />


          <Route path='/signup/experts/step2' element={<Page2 />} />
          <Route path='/signup/experts/step3' element={<Page3 />} />
          <Route path='/signup/experts/step3' element={<Page3 />} />
          <Route path='/signup/experts/success' element={<Success />} />

          <Route path='/otp/customer' element={<Otp />} />
          <Route path='/otp/experts' element={<OtpExperts />} />

        </Routes>
      </DataState>
    </>
  )
}

export default App