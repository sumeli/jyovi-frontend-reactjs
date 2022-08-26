import React from 'react'
import carouselimage1 from '../../Img/doctorcarousel.jpg'
import carouselimage2 from '../../Img/lawyercarousel.jpg'
import carouselimage3 from '../../Img/expertcarousel.jpg'
import {Carousel} from 'flowbite-react'
import './home.css'

const Carousell = () => {
    return (
        <div className='carousel'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img
                        src={carouselimage1}
                        alt="..."
                    />
                    <img
                        src={carouselimage2}
                        alt="..."
                    />
                    <img
                        src={carouselimage3}
                        alt="..."
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default Carousell