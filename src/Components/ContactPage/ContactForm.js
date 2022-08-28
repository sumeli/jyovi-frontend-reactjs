import React, { useState } from 'react'
import { TextInput, Label, Textarea, Button} from 'flowbite-react'
import './contact.css'

const ContactForm = () => {

  const [isloggedin, setIsLoggedIn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

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
        {isloggedin
          ?
          <Button type="submit">
            Submit
          </Button>
          :
          <div>

            <button onClick={handleModal} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
              Submit
            </button>

            <div id="popup-modal" tabindex="-1" className={modalOpen ? "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex" : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex"} aria-modal="true" role="dialog">
              <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button onClick={handleModal} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-6 text-center">
                    <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Please Login/Signup to proceed forward !</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ContactForm