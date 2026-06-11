import React from "react";
import { SiTodoist } from "react-icons/si";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Navbar = ({ totalTodos = 0 }) => {
  return (
    <header className="sticky top-0 z-40 my-4">
      <div className="flex items-center justify-between rounded-2xl border border-amber-200 bg-gradient-to-r from-[#F8F5EF] to-[#F1E8D8] px-5 py-4 shadow-sm backdrop-blur-sm">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
            <SiTodoist className="text-2xl text-amber-700" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-amber-900">TodoSpace</h1>

            <p className="text-xs text-amber-600">
              Organize your day efficiently
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-sm border border-amber-100">
          <RiCheckboxCircleFill className="text-green-600 text-lg" />

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-amber-900">
              {totalTodos}
            </span>

            <span className="text-[11px] text-gray-500">Total Tasks</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
