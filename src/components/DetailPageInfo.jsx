import React from "react";
import { DetailExtraInfo } from "./DetailExtraInfo";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/shoppingCart/ShoppingCartSlice";
import { useCart } from "../context/cartContext";

export const DetailPageInfo = ({product}) => {

  /* const dispatch = useDispatch() */

  const   { addToCart } = useCart()

  const handleClick = () => {
    /* dispatch(addToCart(product)) */
    addToCart(product)
  }
  return (
    <div className="p-4  text-white">
      <p className="font-serif font-bold text-xl ">{product?.name}</p>
      <p className="font-semibold">{product?.price} Sek</p>
      <div className="flex justify-between items-center mt-4">
        <button onClick={handleClick} className="border py-1 px-3 bg-blue-900 l text-white hover:bg-blue-700">
          Lägg till i varukorg
        </button>
      </div>
      <hr className="mt-8" />
      <DetailExtraInfo key={product} product={product} />
    </div>
  );
};
