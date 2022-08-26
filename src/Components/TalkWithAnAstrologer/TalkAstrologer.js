import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Talk.css'
import { TalkAstrologerData } from './TalkAstrologerData'

const TalkAstrologer = () => {

    const talkData = TalkAstrologerData

    return (
        <div>
            <Navbar />
            <div className='talk'>
                <div class="w-full h-24"></div>
                <div className='w-full px-10 pt-5'>
                    <div className='flex justify-start items-center'>
                        <div class="mr-5">Available Balance: ₹ 0</div>

                        <div>
                            <button type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-lavender focus:z-10 focus:ring-2 focus:ring-gray-200">Recharge</button>
                        </div>
                    </div>

                    <div className='mt-10 grid grid-cols-1 gap-1 xl:grid-cols-3 md:grid-cols-2'>
                        {talkData.map((data) => {
                            return (
                                <div className='mb-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col md:flex-row items-center justify-between m-2'>
                                    <div class="flex justify-center items-center">
                                        <div class="flex flex-col items-center justify-center">

                                            <div class="relative"><img class="p-1 w-20 h-20 rounded-full ring-2 ring-lavender"
                                                src={data.image} alt="Bordered avatar" />
                                                <span class="absolute bottom-0 right-0 transform rounded-full">

                                                    <img src={data.tick} class="h-6 inline" alt="" />

                                                </span>
                                            </div>

                                            <div class="flex items-center mt-2">
                                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <title>First star</title>
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <title>Second star</title>
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <title>Third star</title>
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <title>Fourth star</title>
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Fifth star</title>
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                            </div>

                                            <div class="text-gray-400 mt-2">{data.orders} Orders
                                            </div>

                                        </div>

                                        <div class="flex flex-col items-start justify-center ml-4">
                                            <div class="text-lg font-bold font-lato hover:text-lavender cursor-pointer">Pradeep Mane


                                            </div>
                                            <div class="text-gray-600 text-sm">{data.exprtise}</div>
                                            <div class="text-gray-600 text-sm">{data.language}</div>
                                            <div class="text-gray-600 text-sm">Exp: {data.exp}</div>
                                            <div class="text-md font-bold capitalize">{data.fees}</div>
                                        </div>

                                    </div>

                                    <div class="h-full flex flex-col items-center justify-end mt-3 md:mt-0 md:ml-3 ">
                                        <div>

                                            <button type="button"
                                                class="text-white bg-lavender hover:bg-white hover:text-lavender focus:outline-none  hover:ring-2 hover:ring-purple-300 focus:ring-4 focus:ring-purple-300  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition-all">Call</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default TalkAstrologer