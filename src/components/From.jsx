import React from 'react'

export const From = () => {
  return (
    <form className='w-full'>
      <div className='mb-4'>
        <label htmlFor="name" className='block w-full'>Name</label>
        <input className='block w-full border-2 rounded-md border-cyan-900' type="text" />
        <p className='text-red-600 font-semibold'>Error message</p>
      </div>
      <div className='mb-4'>
        <label htmlFor="email" className='block w-full'>Email</label>
        <input className='block w-full border-2 rounded-md border-cyan-900' type="email" />
        <p className='text-red-600 font-semibold'>Error message</p>
      </div>

      <div>
        <label htmlFor="message" className='block w-full'>Meddelande</label>
        <textarea name="message" id="message" className='block w-full border-2 rounded-md border-cyan-900'></textarea>
        <p className='text-red-600 font-semibold'>Error message</p>
      </div>
      <button className='hover:bg-cyan-700 uppercase font-semibold border w-full text-white py-2 rounded-md bg-cyan-600'>Skicka</button>
    </form>
  )
}
