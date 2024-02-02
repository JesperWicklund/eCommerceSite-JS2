import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
const ShopingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
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
                <div className="px-6 font-bold">Varukorg (0)</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopingCart;
