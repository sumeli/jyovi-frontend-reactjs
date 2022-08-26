import React, { useState } from 'react'
import logo from '../../Img/logo.jpg'
import menuSymbol from '../../Img/menu-symbol-svgrepo-com.svg'
import '../Home/home.css'

const Navbar = () => {

    const [dropOpen, setDropOpen] = useState(false)
    const [docdropOpen, setdocDropOpen] = useState(false)
    const [drawers, setDrawers] = useState(false)

    const handleDropOpen = () => {
        setDropOpen((prevState) => !prevState)
    }

    const handleDocDropOpen = () => {
        setdocDropOpen((prevState) => !prevState)
    }

    const handleDrawer = () => {
        setDrawers((prevState) => !prevState)
    }
    return (
        <div>
            <nav className='
         bg-white
         border-gray-200
         px-2
         sm:px-4
         py-2.5
         rounded
         fixed
         w-full
         z-40
        '>
                <a href="/" className="flex items-center">
                    <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="
          self-center
          text-xl
          font-semibold
          whitespace-nowrap
          ">Jyovi</span> </a>
                <div className='container flex flex-wrap justify-between items-center mx-auto'>
                    <div class="w-6 m-4 ">
                        <img src={menuSymbol} alt="" class="items-start class=" type="button"
                            data-drawer-target="drawer-backdrop" data-drawer-show="drawer-backdrop" data-drawer-backdrop="true"
                            aria-controls="drawer-backdrop" onClick={handleDrawer} />
                    </div>

                    <div className='flex md:order-2'>
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
                            className='
                        md:hidden
                        text-gray-500
                        hover:bg-gray-100
                        focus:outline-none focus:ring-4 focus:ring-gray-200
                        rounded-lg
                        text-sm
                        p-2.5
                        mr-1
                        '
                        >
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>

                        <div className='hidden relative md:block'>
                            <div
                                className=' flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none'>
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="
                block
                p-2
                pl-10
                w-full
                text-gray-900
                bg-gray-50
                rounded-lg
                border border-gray-300
                sm:text-sm
                focus:ring-lavender focus:border-lavender
              " placeholder="Search..." />
                        </div>
                        <button className="loginbtn">
                            Login / SignUp
                        </button>
                    </div>

                    <div className='
                    hidden
            justify-between
            items-center
            w-full
            md:flex md:w-auto md:order-1
            '
                        id="navbar-search">
                        <div className='relative mt-3 md:hidden'>
                            <div className='
                                flex
                                absolute
                                inset-y-0
                                left-0
                                items-center
                                pl-3
                                pointer-events-none
                                '>
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="
                block
                p-2
                pl-10
                w-full
                text-gray-900
                bg-gray-50
                rounded-lg
                border border-gray-300
                sm:text-sm
                focus:ring-lavender focus:border-lavender
              " placeholder="Search..." />
                        </div>

                        <div className='
                        hidden
                        justify-between
                        items-center
                        w-full
                        md:flex md:w-auto md:order-1
                        ' id="navbar-sticky">
                            <ul className="
              flex flex-col
              p-4
              mt-4
              bg-gray-50
              rounded-lg
              border border-gray-100
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
            ">
                                <li>
                                    <a href="#" className="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-white
                  bg-lavender
                  rounded
                  md:bg-transparent md:text-lavender md:p-0
                  navlink-home
                " aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="expertspage.html" className="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:hover:text-lavender
                  md:p-0
                ">Experts</a>
                                </li>
                                <li>
                                    <a href="#" className="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:hover:text-lavender
                  md:p-0
                ">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:hover:text-lavender
                  md:p-0
                ">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </nav>
            {/* <div>
                <Drawer />
            </div> */}

            <div
                id="drawer-backdrop"
                className={
                    drawers
                        ?
                        "fixed z-50 h-screen p-4 overflow-y-auto bg-white w-80 transition-transform left-0 top-0 transform-none "
                        : "hidden fixed z-50 h-screen p-4 overflow-y-auto bg-white w-80 transition-transform left-0 top-0 transform-none"
                }
                tabindex="-1"
                aria-labelledby="drawer-backdrop-label"
                aria-modal="true"
                role="dialog"
            >
                <h5
                    id="drawer-backdrop-label"
                    class="
          text-base
          font-semibold
          text-gray-500
          uppercase
        "
                >
                    Menu
                </h5>
                <button
                    onClick={handleDrawer}
                    type="button"
                    data-drawer-dismiss="drawer-backdrop"
                    aria-controls="drawer-backdrop"
                    class="
          text-gray-400
          bg-transparent
          hover:bg-gray-200 hover:text-gray-900
          rounded-lg
          text-sm
          p-1.5
          absolute
          top-2.5
          right-2.5
          inline-flex
          items-center
        "
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="hidden sr-only">Close menu</span>
                </button>
                <div class="py-4 overflow-y-auto">
                    <ul class="space-y-2">
                        <li>
                            <a
                                href="#"
                                class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-white
                rounded-lg
                
                
                bg-lavender
                md:hidden
              "
                            >

                                <span class="ml-3 ">Home</span>
                            </a>
                        </li>

                        {/* <!-- Dropdown Astrologer --> */}
                        <li>
                            <button
                                onClick={handleDropOpen}
                                type="button"
                                class="
                flex
                items-center
                w-full
                p-2
                text-base
                font-normal
                text-gray-900
                transition
                duration-75
                rounded-lg
                group
                hover:bg-gray-100
              "
                                aria-controls="dropdown-example1"
                                data-collapse-toggle="dropdown-example1"
                            >
                                {/* <svg>
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg> */}
                                <span class="flex-1 ml-3 text-left whitespace-nowrap"
                                >Astrologer</span
                                >
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <ul id="dropdown-example1" className={dropOpen ? "py-2 space-y-2" : "hidden py-2 space-y-2"}>
                                <li>
                                    <a
                                        href="#"
                                        class="
                    flex
                    items-center
                    w-full
                    p-2
                    text-base
                    font-normal
                    text-gray-900
                    transition
                    duration-75
                    rounded-lg
                    pl-11
                    group
                    hover:bg-gray-100
                  "
                                    >Love & Relationships</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="
                    flex
                    items-center
                    w-full
                    p-2
                    text-base
                    font-normal
                    text-gray-900
                    transition
                    duration-75
                    rounded-lg
                    pl-11
                    group
                    hover:bg-gray-100
                  "
                                    >Marriage & Kundali</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="
                    flex
                    items-center
                    w-full
                    p-2
                    text-base
                    font-normal
                    text-gray-900
                    transition
                    duration-75
                    rounded-lg
                    pl-11
                    group
                    hover:bg-gray-100
                  "
                                    >Money & investment</a
                                    >
                                </li>
                            </ul>
                        </li>
                        {/* <!-- Dropdown Doctor --> */}
                        <li>
                            <button
                                onClick={handleDocDropOpen}
                                type="button"
                                class="
                flex
                items-center
                w-full
                p-2
                text-base
                font-normal
                text-gray-900
                transition
                duration-75
                rounded-lg
                group
                hover:bg-gray-100
              "
                                aria-controls="dropdown-example2"
                                data-collapse-toggle="dropdown-example2"
                            >
                                {/* <svg>
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg> */}
                                <span class="flex-1 ml-3 text-left whitespace-nowrap"
                                >Doctor</span
                                >
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <ul id="dropdown-example2" className={docdropOpen ? 'py-2 space-y-2' : 'hidden py-2 space-y-2'}>
                                <li>
                                    <a
                                        href="#"
                                        class="
                    flex
                    items-center
                    w-full
                    p-2
                    text-base
                    font-normal
                    text-gray-900
                    transition
                    duration-75
                    rounded-lg
                    pl-11
                    group
                    hover:bg-gray-100
                  "
                                    >Ayurvedic</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="
                    flex
                    items-center
                    w-full
                    p-2
                    text-base
                    font-normal
                    text-gray-900
                    transition
                    duration-75
                    rounded-lg
                    pl-11
                    group
                    hover:bg-gray-100
                  "
                                    >Homopathic</a
                                    >
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
                            >

                                <span class="flex-1 ml-3 whitespace-nowrap">Lawyer</span>

                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
                            >

                                <span class="flex-1 ml-3 whitespace-nowrap">Veterinary</span>

                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
                            >

                                <span class="flex-1 ml-3 whitespace-nowrap">Psychologist</span>

                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
                            >

                                <span class="flex-1 ml-3 whitespace-nowrap">Financial Expert</span>

                            </a>
                        </li>

                        {/* <!-- Join as professional --> */}
                        <li>
                            <a
                                href="#"
                                class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
                            >
                                <svg
                                    aria-hidden="true"
                                    class="
                  flex-shrink-0
                  w-6
                  h-6
                  text-gray-500
                  transition
                  duration-75
                  group-hover:text-gray-900
                "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Join as Professional</span>
                            </a>
                        </li>


                        <li>
                            <a
                                href="#"
                                class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
                            >
                                <svg
                                    aria-hidden="true"
                                    class="
                  flex-shrink-0
                  w-6
                  h-6
                  text-gray-500
                  transition
                  duration-75
                  group-hover:text-gray-900
                "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    )
}

export default Navbar