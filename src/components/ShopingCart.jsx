import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
import { ShoppingCartContent } from "./ShoppingCartContent";
import { useSelector } from "react-redux";
const ShopingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQuantity } = useSelector(state => state.shoppingCart)
  return (
    <>
      <div className="relative p-1 ">
         { totalQuantity > 0 &&<div className="absolute bg-white w-4 h-4 flex items-center -right-3 top-0 justify-center rounded-full text-sm font-semibold text-black">
          <p>{totalQuantity}</p>
        </div>}
        <button  onClick={() => setIsOpen(true)}>
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
              <ShoppingCartContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopingCart;
