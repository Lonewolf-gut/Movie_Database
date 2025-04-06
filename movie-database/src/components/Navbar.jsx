import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHome, FaFolder, FaFileAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav class="bg-black text-white flex justify-between  px-10 py-5 h-24 ">
      <img src={logo} alt="Logo" class="w-11 h-11" />
      <span></span>

      <ul class="flex space-x-14 space-y-3">
        <span></span>
        <li class="hover:text-red-500">
          <Link to="/home">
            <FaHome class="text-xl hover:text-red-500" />
          </Link>
        </li>
        <li class="hover:text-red-500">
          <Link to="/search">
            <FaFolder class="text-xl hover:text-red-500"></FaFolder>
          </Link>
        </li>
        <li class="hover:text-red-500">
          <Link to="/detail">
            {" "}
            <FaFileAlt class="text-xl hover:text-red-500"></FaFileAlt>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
