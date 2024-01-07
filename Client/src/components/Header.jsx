import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <NavLink to="/">
            <span className="text-slate-500">Dream</span>
            <span className="text-slate-700">Estate</span>
          </NavLink>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex items-center gap-2">
          <li className="hidden sm:inline text-slate-800 hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hidden sm:inline text-slate-800 hover:underline">
            <NavLink to="about">About</NavLink>
          </li>
          <li className="hidden sm:inline text-slate-800 hover:underline">
            <NavLink to="sign-in">Login</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
