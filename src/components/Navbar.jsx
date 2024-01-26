import React from "react";
import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="nav fixed top-0 left-0 right-0 flex justify-between items-center bg-gradient-to-b from-cyan-800 to-slate-600 py-6 text-white font-semibold">
      <div className="nav-title ml-6">
        <Link to="/" className="font-extrabold uppercase text-2xl">title</Link>
      </div>
      <div className="nav-links">
        <ul className="flex gap-3 font-mono">
          <li><NavLink className="aria-[current=page]:underline" to="/" >Hem</NavLink></li>
          <li><NavLink className="aria-[current=page]:underline" to="/products">Produkter</NavLink></li>
          <li><NavLink className="aria-[current=page]:underline" to="/contact">Kontakt</NavLink></li>
        </ul>
      </div>
      <div className="user-links font-mono">
        <ul className=" flex gap-3 mr-6">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cart">Varukorg</Link></li>
        </ul>

      </div>
    </div>
  );
}
