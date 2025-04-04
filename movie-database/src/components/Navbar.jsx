import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav class="bg-black text-white flex space-x-48 px-10 py-5 h-24">
      <img src={logo} alt="Logo" class="w-14 h-14" />
      <span></span>

      <ul class="flex space-x-14 space-y-3">
        <span></span>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <input
        class="h-10 w-auto mt-2 placeholder:px-5 rounded border-none outline-none"
        type="text"
        name="text"
        value=""
        placeholder="search movie"
      ></input>
    </nav>
  );
}

export default Navbar;
