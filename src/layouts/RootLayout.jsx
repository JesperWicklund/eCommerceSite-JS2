import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Providers from "../components/Providers";
import ShopingCart from "../components/ShopingCart";


function RootLayout() {
  return (
    <Providers >
      <div className="bg-gradient-to-t from-gray-800 to-stone-900 min-h-svh text-white">
        <Navbar />
        <Outlet />
        {/* <ShopingCart /> */}
      </div>
    </Providers>
  );
}

export default RootLayout;
