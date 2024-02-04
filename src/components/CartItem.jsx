import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeOne, addToCart, removeItem } from '../store/features/shoppingCart/ShoppingCartSlice';
import { useCart } from '../context/cartContext';


export const CartItem = ({item}) => {

    /* const dispatch = useDispatch() */

    const   { addToCart, removeOne, removeItem } = useCart()

    const delOneFromCart = () => {
        /* dispatch(removeOne(item.product._id)) */
        removeOne(item.product._id)
    }

    const addOneToCart = () => {
        /* dispatch(addToCart(item.product)) */
        addToCart(item.product)
    }

    const delProduct = () => {
        /* dispatch(removeItem(item.product._id)) */
        removeItem(item.product._id)
    }
  return (
    <div className='border-b flex justify-between items-center text-black p-2'>
        <div className='flex gap-2'>
            <img src={item.product.images[0]} alt="" className='w-[100px]' />
            <div>
                <p className='truncate font-semibold'>{item.product.name}</p>
                <p>{item.quantity} x {item.product.price}</p>
            </div>
        </div>
        <div className='flex items-center gap-8'>
            <div className='flex gap-3'>
                <button onClick={delOneFromCart}><FaMinus /></button>
                <button onClick={addOneToCart}><FaPlus /></button>
            </div>
            <button onClick={delProduct}><RxCross1 /></button>
        </div>
    </div>
  )
}
