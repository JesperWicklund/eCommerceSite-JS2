import React, { useEffect, useState } from "react";
import { ProductDetailInfo } from "../components/ProductDetailInfo";
import { ProductDetailImages } from "../components/ProductDetailImages";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ExtraInfo } from "../components/ExtraInfo";

function DetailPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        `https://js2-ecommerce-api.vercel.app/api/products/${id}`
      );
      console.log(res);
      setProduct(res.data);
    };
    getProducts();
  }, []);

  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-600  p-2 mt-20">
      <div className="flex flex-col mx-16 lg:flex-row">
        <ProductDetailImages key={product} product={product} />
        <ProductDetailInfo key={product} product={product} />
      </div>
      <hr className="mt-8"/>
      <ExtraInfo key={product} product={product} />
    </div>
  );
}

export default DetailPage;
