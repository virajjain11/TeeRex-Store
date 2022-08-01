import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-slate-300 items-center">
      <h1 className="text-xl font-semibold tracking-wider">Tee Rex Store</h1>
      <div className=" ">
        <span className="pl-2">Products</span>
        <span className="pl-2">Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
