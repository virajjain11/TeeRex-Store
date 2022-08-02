import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  // const handlePush = () => {
  //   navigate("/");
  // };
  return (
    <div className="flex justify-between p-4 bg-slate-300 items-center">
      <h1
        // onClick={handlePush}
        className="text-xl font-semibold tracking-wider cursor-pointer"
      >
        <Link to={"/"}>Tee Rex Store</Link>
      </h1>
      <div className=" ">
        {/* <span className="pl-2">Products</span>
        <span className="pl-2">Cart</span> */}
        <nav>
          <Link className="pl-2" to="product">
            {" "}
            Product
          </Link>
          <Link className="pl-2" to="cart">
            Cart
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
