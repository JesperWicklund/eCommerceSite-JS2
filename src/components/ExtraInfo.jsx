import React from 'react'

export const ExtraInfo = ({product}) => {
  return (
    <div>
        <div className="flex justify-around items-center mx-4 mt-8 text-white">
          <button className="border w-full py-3 bg-blue-400 text-white">
            Produktinfo
          </button>
          <button className="border hover:bg-blue-300 w-full py-3">Specifikationer</button>
          <button className="border hover:bg-blue-300 w-full py-3">Produktrecensioner</button>
        </div>
        <p className="p-4 font-serif text-white">{product?.description}</p>
      </div>
  )
}
