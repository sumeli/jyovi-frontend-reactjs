import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Phonecode = () => {

    const [value, setValue] = useState()

    return (
        <div>
            <PhoneInput
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue} />
        </div>
    )
}

export default Phonecode