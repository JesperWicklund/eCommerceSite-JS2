import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import CartContextProvider from "../context/cartContext";
const Providers = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <CartContextProvider>
          
        {children}
        </CartContextProvider>
        </Provider>
    </>
  );
};

export default Providers;
