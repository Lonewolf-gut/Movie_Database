import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav class="bg-black text-white flex justify-between  px-10 py-5 h-24 ">
      <img src={logo} alt="Logo" class="w-14 h-14" />
      <span></span>

      <ul class="flex space-x-14 space-y-3">
        <span></span>
        <li class="hover:text-red-500">
          <Link to="/home">Home</Link>
        </li>
        <li class="hover:text-red-500">
          <Link to="/search">Database</Link>
        </li>
        <li class="hover:text-red-500">
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
