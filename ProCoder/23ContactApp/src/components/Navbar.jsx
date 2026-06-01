import React from "react";


const Navbar = () => {
  return (
    <div className="h-[60px] flex bg-white my-3 rounded-lg items-center justify-center text-xl font-medium gap-2">
      <div className="flex">
        <img src="/firebase.svg" alt="" />
        <h1>Firebase Contact App</h1>
      </div>
    </div>
  );
};

export default Navbar;
