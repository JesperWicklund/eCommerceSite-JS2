import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
const ShopingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, totalPrice } = useSelector((state) => state.shoppingCart);
  const { totalQuantity } = useSelector((state) => state.shoppingCart);
  return (
    <>
      <div className="relative p-1 ">
        {totalQuantity > 0 && (
          <div className="absolute bg-white w-4 h-4 flex items-center -right-3 top-0 justify-center rounded-full text-sm font-semibold text-black">
            <p>{totalQuantity}</p>
          </div>
        )}
        <button onClick={() => setIsOpen(true)}>
          <BsBagFill />
        </button>
      </div>
      {isOpen && (
        <div className="bg-black bg-opacity-50 fixed z-30 top-0 left-0 w-full h-screen">
          <div className=" text-gray-700 h-full bg-slate-300 sm:w-[40rem] min-w-[15rem] overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center cursor-pointer "
                  onClick={() => setIsOpen(false)}
                >
                  <HiChevronLeft className="text-gray-700" />
                  <span className="uppercase text-sm text-gray-700 font-semibold select-none">
                    Fortsätt Handla
                  </span>
                </div>
                <div className="px-6 font-bold">Varukorg ({totalQuantity})</div>
              </div>
              <div>
                <div className="">
                  {cart.length < 1 && (
                    <div>
                      <p className="text-center p-4">Din varukorg är tom</p>
                    </div>
                  )}
                  {cart.map((item) => (
                    <CartItem item={item} />
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center px-4">
                  <div>
                    <p className="text-xl font-semibold">Total: {totalPrice}</p>
                  </div>
                  <div>
                    <Link
                      to="/checkout"
                      onClick={() => setIsOpen(false)}
                      className="border rounded-md p-2 bg-black opacity-70 text-white border-gray-700"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopingCart;
