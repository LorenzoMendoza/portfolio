import React from 'react'
// import Navbar from './Navbar'
import email from '../assets/email.svg'

const Contact = () => {
  return (
    
    <div name="Contact" className='h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4'>
            <div className='mb-20'>
                <h1 className='text-5xl'>Contact</h1>
                <p className='py-5'>Send me an Email</p>
            </div>
            <div className='flex flex-col md:flex-row'>
              <form action="https://getform.io/f/e5b026fc-0c5b-4d1f-a2d6-a18d781879cc" method='POST' className="flex flex-col w-96 mr-auto">
                  <input type="text" name="name" placeholder="Enter your name" className="border-2 py-2 px-2"/>
                  <input type="email" name="email" placeholder="Enter your email" className="border-2 py-2 px-2 my-4"/>
                  <textarea rows="10" placeholder="Message" name="message" className="border-2 py-2 px-2"/>
                  <button className='text-sm bg-indigo-500 hover:bg-purple-400 text-white font-bold py-1 px-4 rounded my-8'>Send</button>
              </form>
              <img src={email} height={375} width={375} alt="contact"></img>
            </div>
        </div>
    </div>
  )
}

export default Contact