import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/details/${product._id}`} className='rounded-sm bg-white flex flex-col justify-between  p-2'>
        <div>
            <img src={product.images[0]} alt="" />
            <p className='font-semibold'>{product.name}</p>
        </div>
        <div>
            <button className='w-full bg-slate-800 py-1 text-white'>{product.price} :-</button>
        </div>
    </Link>
  )
}
