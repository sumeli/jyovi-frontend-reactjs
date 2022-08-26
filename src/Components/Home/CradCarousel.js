// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class CradCarousel extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       swipeToSlide: true,
//       afterChange: function(index) {
//         console.log(
//           `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//         );
//       }
//     };
//     return (
//       <div>
//         <h2>Swipe To Slide</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import React from 'react'
import Carousel from 'carousel-react-rcdev'
import cardCouselImage from '../../Img/profilepic01.jpeg'
import './home.css'
import { CradCarouselData } from './CardCarouselData'

const CradCarousel = () => {
    const cardData = CradCarouselData
    return (
        <div>

            <div class="flex flex-col w-full md:w-auto md:rounded-2xl bg-white h-auto md:mx-10 lg:mx-40 from-black">

                <div class="flex flex-row justify-between ">
                    <div>
                        <div class=" flex items-left pl-4 flex-col font-bold text-xl md:text-3xl lg:text-4xl pt-8 text-black">Our
                            Astrologers</div>

                        <div class="flex items-left pl-4 flex-col text-xs md:text-2xl pt-2 text-black ">India's best astrologers at your
                            services</div>
                    </div>
                    <div class="flex flex-row p-8 justify-evenly items-center px-5">
                        <span class="text-black font-bold mx-4 md:text-lg text-xs ">View All</span>

                        <button type="button"
                            class="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:bg-lavender font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                            <svg aria-hidden="true" class="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Icon description</span>
                        </button>

                    </div>
                </div>

                <div className='card-carousel'>
                    <Carousel>
                        {cardData.map((card) => {
                            return (
                                <div class="flex flex-nowrap mt-5 astrologercard">
                                    <div class="inline-block px-3">
                                        <div
                                            class="w-32 h-32 md:w-64 md:h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                            <div class="flex flex-col items-center pb-2 mb-10 mt-4">
                                                <a href="expertprofile.html">
                                                    <img
                                                        class="mb-3 w-12 h-12 md:w-24 md:h-24 rounded-full shadow-lg ring-lavender ring-2 border-2 ring-offset-4 hover:shadow-2xl "
                                                        src={card.cardimg} alt="Bonnie image" /></a>
                                                <h5 class="mb-1 text-[10px] md:text-xl font-medium text-gray-900 ">Robert Brown</h5>
                                                <span class="md:text-sm text-[8px] text-gray-500 ">Numerology</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>

            <div class="flex flex-col w-full md:w-auto md:rounded-2xl bg-white h-auto md:mx-10 lg:mx-40 from-black">

                <div class="flex flex-row justify-between ">
                    <div>
                        <div class=" flex items-left pl-4 flex-col font-bold text-xl md:text-3xl lg:text-4xl pt-8 text-black">Our Lawyers
                        </div>

                        <div class="flex items-left pl-4 flex-col text-xs md:text-2xl pt-2 text-black ">India's best lawyers at your
                            services</div>
                    </div>
                    <div class="flex flex-row p-8 justify-evenly items-center px-5">
                        <span class="text-black font-bold mx-4 md:text-lg text-xs ">View All</span>

                        <button type="button"
                            class="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:bg-lavender font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                            <svg aria-hidden="true" class="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Icon description</span>
                        </button>

                    </div>
                </div>

                <div className='card-carousel'>
                    <Carousel>
                        {cardData.map((card) => {
                            return (
                                <div class="flex flex-nowrap mt-5 astrologercard">
                                    <div class="inline-block px-3">
                                        <div
                                            class="w-32 h-32 md:w-64 md:h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                            <div class="flex flex-col items-center pb-2 mb-10 mt-4">
                                                <a href="expertprofile.html">
                                                    <img
                                                        class="mb-3 w-12 h-12 md:w-24 md:h-24 rounded-full shadow-lg ring-lavender ring-2 border-2 ring-offset-4 hover:shadow-2xl "
                                                        src={card.cardimg} alt="Bonnie image" /></a>
                                                <h5 class="mb-1 text-[10px] md:text-xl font-medium text-gray-900 ">Robert Brown</h5>
                                                <span class="md:text-sm text-[8px] text-gray-500 ">Numerology</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>

            <div class="flex flex-col w-full md:w-auto md:rounded-2xl bg-white h-auto md:mx-10 lg:mx-40 from-black">

                <div class="flex flex-row justify-between ">
                    <div>
                        <div class=" flex items-left pl-4 flex-col font-bold text-xl md:text-3xl lg:text-4xl pt-8 text-black">Our
                            Doctors</div>

                        <div class="flex items-left pl-4 flex-col text-xs md:text-2xl pt-2 text-black ">India's best doctors at your
                            services</div>
                    </div>
                    <div class="flex flex-row p-8 justify-evenly items-center px-5">
                        <span class="text-black font-bold mx-4 md:text-lg text-xs ">View All</span>

                        <button type="button"
                            class="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:bg-lavender font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                            <svg aria-hidden="true" class="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Icon description</span>
                        </button>

                    </div>
                </div>

                <div className='card-carousel'>
                    <Carousel>
                        {cardData.map((card) => {
                            return (
                                <div class="flex flex-nowrap mt-5 astrologercard">
                                    <div class="inline-block px-3">
                                        <div
                                            class="w-32 h-32 md:w-64 md:h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                            <div class="flex flex-col items-center pb-2 mb-10 mt-4">
                                                <a href="expertprofile.html">
                                                    <img
                                                        class="mb-3 w-12 h-12 md:w-24 md:h-24 rounded-full shadow-lg ring-lavender ring-2 border-2 ring-offset-4 hover:shadow-2xl "
                                                        src={card.cardimg} alt="Bonnie image" /></a>
                                                <h5 class="mb-1 text-[10px] md:text-xl font-medium text-gray-900 ">Robert Brown</h5>
                                                <span class="md:text-sm text-[8px] text-gray-500 ">Numerology</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CradCarousel