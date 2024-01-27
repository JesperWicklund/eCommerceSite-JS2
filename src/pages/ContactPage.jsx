import React from 'react'
import { Form } from '../components/Form'

function ContactPage() {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-600">
      <div className='h-svh grid grid-cols-[1fr,auto] py-28 px-8 '>
      <div className='left bg-cyan-900 text-white text-4xl font-bold rounded-l-lg max-md:hidden'>
        <h1 className='mt-[16rem] text-center'>Kontakta Oss</h1>
      </div>
      <div className=' max-md:rounded-lg max-md:w-full p-4 w-[450px] flex items-center bg-slate-100 rounded-r-lg '>
        <Form />
        </div>
    </div>
    </div>
  )
}

export default ContactPage