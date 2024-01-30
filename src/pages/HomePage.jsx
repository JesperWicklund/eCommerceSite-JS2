import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/features/products/productsSlice";
import { ProductList } from "../components/ProductList";
import { Hero } from "../components/Hero";

function HomePage() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getProducts());
  }, []);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  if (error)
    return (
      <div className="mt-10 text-center">
        <p>{error}</p>
      </div>
    );

  return (
    <>
      <Hero />
      <div className="px-4">
        <ProductList products={products} />
      </div>
    </>
  );
}

export default HomePage;
