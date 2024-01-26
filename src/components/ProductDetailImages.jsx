import React from 'react'
import { useState } from 'react'

export const ProductDetailImages = ({ product }) => {
    const [activeImg, setActiveImg] = useState(0)
  return (
    <div className="lg:max-w-[50%]">
          <img src={product?.images[activeImg]} alt="" />
          <div className='flex gap-2 mt-2'>
            {product?.images.map((image, index) => (
                <div key={index} onClick={() => setActiveImg(index)}>
                    <img src={image}/>
                </div>
            ))}
          </div>
        </div>
  )
}
