import React from 'react'

export const UserCheckout = () => {
  return (
    <div className="">
      <h2 className="text-center text-2xl font-bold mb-4">Vänligen fyll i </h2>
      <form className="max-w-md mx-auto text-black">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            Namn:
          </label>
          <input type="text" id="firstName" name="firstName" className="rounded p-1  w-full" required />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Efternamn:
          </label>
          <input type="text" id="lastName" name="lastName" className="rounded p-1  w-full" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input type="email" id="email" name="email" className="rounded p-1  w-full" required />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Adress:
          </label>
          <input type="text" id="address" name="address" className="rounded p-1  w-full" required />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
            Stad:
          </label>
          <input type="text" id="city" name="city" className="rounded p-1  w-full" required />
        </div>

        <div className="mb-4">
          <label htmlFor="postcode" className="block text-gray-700 text-sm font-bold mb-2">
            Postnummer:
          </label>
          <input type="text" id="postcode" name="postcode" className="rounded p-1  w-full" required />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Mobil:
          </label>
          <input type="tel" id="phoneNumber" name="phoneNumber" className="rounded p-1  w-full" required />
        </div>

        
      </form>
    </div>
  )
}
