import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

function ProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://js2-ecommerce-api.vercel.app/api/products"
      );
      console.log(res);
      setData(res.data);
    };
    getProducts();
  }, []);
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-600 p-2  mt-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
