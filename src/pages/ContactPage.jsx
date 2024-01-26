import React from 'react'
import { From } from '../components/From'

function ContactPage() {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-600">
      <div className='h-svh grid grid-cols-[1fr,auto] py-28 px-8'>
      <div className='left bg-cyan-900 text-white text-4xl font-bold grid items-center text-center rounded-l-lg'>
        <h1>Kontakta Oss</h1>
      </div>
      <div className='p-4 w-[450px] flex items-center bg-slate-100 rounded-r-lg'>
        <From />
        </div>
    </div>
    </div>
  )
}

export default ContactPage