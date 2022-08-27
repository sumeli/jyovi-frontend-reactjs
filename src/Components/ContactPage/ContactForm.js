import React from 'react'
import { TextInput, Label, Textarea, Button } from 'flowbite-react'
import './contact.css'

const ContactForm = () => {

  return (
    <div className='contact-form'>
      <div className='flex flex-col rounded-md mx-2 md:mx-36 my-4 md:p-4 border-gray-400 md:border-x md:border-y'>
        <h1 style={{ "textAlign": "center", "fontSize": "25px", "marginBottom": "20px" }}>Leave your message here</h1>
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="small"
                value="Title"
              />
            </div>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
            />
          </div>
        </div>
        <div id="textarea">
          <div className="mb-2 block">
            <Label
              htmlFor="comment"
              value="Your message"
            />
          </div>
          <Textarea
            id="comment"
            placeholder="Start typing here..."
            required={true}
            rows={4}
          />
        </div>
        <Button type="submit">
          Submit
        </Button>
      </div>
    </div>
  )
}

export default ContactForm