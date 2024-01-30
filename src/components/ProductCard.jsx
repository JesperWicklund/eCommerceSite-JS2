import React from "react";
import { Link } from "react-router-dom"
export const ProductCard = ({ product }) => {
  return (
    <Link to={`/details/${product._id}`} className=" flex flex-col justify-between rounded-md  bg-blue-900 overflow-hidden">
        <img src={product.images[0]} alt={product.name} />
      <div className="p-4 flex flex-col justify-between">
        <p className="font-bold truncate">{product.name}</p>
        <p>{product.price} kr </p>
      </div>
    </Link>
  );
};
