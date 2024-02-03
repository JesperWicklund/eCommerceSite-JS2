import React from 'react'
import { Link } from 'react-router-dom'

export const ContactModal = ({isOpen, onClose}) => {
  return (
    <>
    {isOpen && (
      <div className="fixed top-0 inset-x-0 flex items-center justify-center h-screen">
        <div className="bg-gray-800 p-8 rounded shadow-lg w-1/2 flex flex-col ">
          <p className=' font-semibold text-xl'>Tack för meddelandet vi återkommer med svar så snart vi kan</p>
          <Link to="/" onClick={onClose} className="w-full mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Gå tillbaka till hemskärm
          </Link>
        </div>
      </div>
    )}
  </>
  )
}
