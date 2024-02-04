
import { CartItem } from "../components/CartItem";

import { UserCheckout } from "../components/UserCheckout";
import { useCart } from "../context/cartContext";

function CheckoutPage() {
  const { cart, totalPrice, totalQuantity, clearCart } = useCart()


  const handleCheckOut = async () => {
    const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products: cart.map(item => ({
          productId: item.product._id,
          quantity: item.quantity
        }))
      })
    });

    if (!response.ok) {
      <p>Errorrrrrr!!!</p>
    }

    
    const responseData = await response.json();
    console.log(responseData);

    clearCart();
    
  }

  return (
    <div className="flex flex-col p-4  items-center lg:flex-row lg:gap-4">
      <div className="min-w-1/2 bg-slate-400 rounded p-4">
        <div className="text-black px-6 font-bold">
          Varukorg ({totalQuantity})
        </div>
        <div className="">
          {cart.length < 1 && (
            <div>
              <p className=" text-center p-4">Din varukorg är tom</p>
            </div>
          )}
          {cart.map((item) => (
            <CartItem key={`cart_${item.product._id}`} item={item} />
          ))}
        </div>
        <div className="mt-4  flex justify-between items-center px-4">
          <div>
            <p className="text-black text-xl font-semibold">
              Total: {totalPrice}
            </p>
          </div>
          <button onClick={clearCart} className="border rounded-md p-1 bg-slate-600 text-gray-300">Töm Varukorg</button>
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="w-full">
          <UserCheckout />
          <button onClick={handleCheckOut} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Bekräfta Köp
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
