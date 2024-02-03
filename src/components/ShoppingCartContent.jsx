import React from "react";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



export const ShoppingCartContent = () => {

    const {cart, totalPrice } = useSelector(state => state.shoppingCart)
  return (
    <div>
      <div className="">
        {cart.length < 1 && (
          <div><p className="text-center p-4">Din varukorg är tom</p></div>
        )}
        {cart.map(item => (
            <CartItem item={item}/>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center px-4">
        <div>
          <p className="text-xl font-semibold">Total: {totalPrice}</p>
        </div>
        <div>
          <Link to="/checkout" onClick={() => setIsOpen(false)} className="border rounded-md p-2 bg-black opacity-70 text-white border-gray-700">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
