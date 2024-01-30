import React from "react";
import { DetailExtraInfo } from "./DetailExtraInfo";

export const DetailPageInfo = ({product}) => {
  return (
    <div className="p-4  text-white">
      <p className="font-serif font-bold text-xl ">{product?.name}</p>
      <p className="font-semibold">{product?.price} Sek</p>
      <div className="flex justify-between items-center mt-4">
        <button className="border py-1 px-3 bg-blue-900 l text-white hover:bg-blue-700">
          Lägg till i varukorg
        </button>
      </div>
      <hr className="mt-8" />
      <DetailExtraInfo key={product} product={product} />
    </div>
  );
};
