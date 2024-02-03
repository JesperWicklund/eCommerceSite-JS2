import React from "react";
import { CartItem } from "../components/CartItem";
import { useSelector } from "react-redux";


function CheckoutPage() {
  const { cart, totalPrice } = useSelector((state) => state.shoppingCart);
  return (
    <div className="flex flex-col  items-center lg:flex-row lg:gap-4">
      <div className="w-1/2 bg-slate-400 rounded p-4">
        <div className="">
          {cart.length < 1 && (
            <div>
              <p className=" text-center p-4">Din varukorg är tom</p>
            </div>
          )}
          {cart.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="mt-4  flex justify-between items-center px-4">
          <div>
            <p className="text-black text-xl font-semibold">Total: {totalPrice}</p>
          </div>
          
        </div>
      </div>
      <div>
            <div>hello</div>
      </div>
    </div>
  );
}

export default CheckoutPage;
