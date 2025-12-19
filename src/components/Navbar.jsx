import { Plus } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-4 py-4">
        <h1 className="text-[24px] font-bold text-[#130B2D]">
          CS — Ticket System
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 w-full lg:w-auto">
          <ul className="flex flex-col lg:flex-row items-center gap-3 lg:gap-7">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Download</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          <button className="bg-[#7C44E9] flex items-center gap-2 text-white rounded-sm py-3 px-4 w-full lg:w-auto justify-center">
            <Plus />
            <span>New Ticket</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
