import React from 'react'

export const ProductDetailInfo = ({product}) => {
  return (
    <div className="p-4  text-white">
          <p className="font-serif font-bold text-xl ">{product?.name}</p>
          <p className="font-semibold">{product?.price} Sek</p>
          <div className="flex justify-between items-center mt-4">
            <button className="border py-1 px-3 bg-blue-400 l text-white hover:bg-blue-300">Lägg till i varukorg</button>
          </div>
        </div>
  )
}
