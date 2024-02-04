import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <>
    <h1 className="pl-4 text-3xl uppercase">Produkter</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
