import React, { useState } from 'react'
import { Dropdown } from 'flowbite-react'
import './signupexperts.css'
import { ProffesionData } from './ProffesionData'

const Proffesion = () => {

    const [drop, setDrop] = useState(false)

    const handleDrop = () => {
        setDrop((prevState) => !prevState)
    }

    const data = ProffesionData

    return (
        <div className='prof-dropdown'>
            <button id="dropdownDefault" onClick={handleDrop} data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Choose Your Profession<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdown"
                className={drop ? "z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" : "hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"}>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    {data.map((profData) => {
                        return (
                            <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{profData.prof}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Proffesion