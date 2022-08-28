import React from 'react'
import { ProfcardsData } from './ProfcardsData'
import './profession.css'

const ProfCards = () => {

    const profcard = ProfcardsData

    return (
        <div className='prof-cards'>
                <h1>Professions</h1>
            <div className='mt-10 grid grid-cols-1 gap-1 xl:grid-cols-3 md:grid-cols-2 prof-card-div'>
                {profcard.map((prof) => {
                    return (
                        <div>
                            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cards">
                                {prof.icon}
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{prof.name}</h5>
                                </a>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfCards