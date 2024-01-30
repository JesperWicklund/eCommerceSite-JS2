import React from "react";

export const DetailExtraInfo = ({product}) => {
  return (
    <div>
      <div className="flex justify-around items-center mx-4 mt-8 text-white">
        <button className="truncate border w-full py-3 bg-blue-900 text-white">
          Produktinfo
        </button>
        <button className="truncate border hover:bg-blue-700 w-full py-3">
          Specifikationer
        </button>
        <button className="truncate border hover:bg-blue-700 w-full py-3">
          Produktrecensioner
        </button>
      </div>
      <p className="p-4 font-serif text-white">{product?.description}</p>
    </div>
  );
};
