import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import profileImage from '../../Img/profilepic01.jpeg'
import callSign from '../../Img/call.svg'
import './expertsProfile.css'

const ExperstProfile = () => {
    return (
        <div className='experts-profile'>
            <div class="'w-full h-28"></div>
            <div class="flex flex-col rounded-md mx-2 md:mx-36 my-4 md:p-4 border-gray-400 md:border-x md:border-y">
                <div class="flex sm:flex-row flex-col items-center">
                    <div class="m-5">

                        <img class="h-64 rounded-full" src={profileImage} alt="" />
                    </div>
                    <div class="m-10 ">
                        <div class="flex flex-row ">
                            <div class="font-bold text-2xl items-center ">Robert Brown</div>
                            <div class="mx-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg></div>
                        </div>
                        <div class="text-md my-2 text-gray-500 items-center">Tarot</div>
                        <div class="text-md my-2 text-gray-500">English, Hindi</div>
                        <div class="text-md my-2 text-gray-500">Exp: 5 years</div>
                        <div class="text-md my-2 text-gray-500 flex flex-row">
                            <div class="font-bold">₹ 80</div>
                            <div>/min</div>
                        </div>
                        <div class=" justify-center mt-6">
                            <button
                                class="border-lavender border-2 rounded-full p-4 px-10 font-bold text-lavender w-full hover:shadow-md ">
                                <div class="flex justify-between w-full">
                                    <div><img class="h-6" src={callSign} alt="" /></div>
                                    <div>Start Call</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col rounded-md  px-4 ">
                    <div class="text-2xl text-center font-medium my-2">About me</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                        architecto consequuntur odit et labore animi itaque, mollitia,
                        doloremque autem vero repudiandae quod pariatur, soluta deleniti atque
                        aut reprehenderit. Odio, delectus. Assumenda, illum nobis corporis, id
                        natus, voluptate ab magnam quibusdam recusandae sed necessitatibus.
                        Molestias facilis dolore ducimus quia vero quo, voluptatem harum eveniet
                        illo illum, dignissimos totam architecto quas sapiente? Molestias
                        quaerat similique autem, atque cumque, ipsa eius sequi dolores dolore
                        repellat quis consequuntur nihil laborum nemo dolorum officiis fugit vel
                        vitae magnam dicta velit dolor recusandae accusantium quae. Nisi?</div>
                </div>
            </div>
        </div>
    )
}

export default ExperstProfile