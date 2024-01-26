import React, { useState } from 'react'

export const ContactFrom = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDeafault()
        console.log('Form submited', formData);

        setFormData({name: '', email: '', message: '' })
    }
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Konstakta Oss</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
          Namn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Skicka
      </button>
    </form>
  </div>
  )
}
