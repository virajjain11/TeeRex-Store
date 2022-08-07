import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.product);
  return (
    <div className="flex justify-between p-4 bg-slate-300 items-center fixed top-0 sm:w-[90vw] w-[100vw] mx-auto">
      <h1 className="text-xl font-semibold tracking-wider cursor-pointer">
        <Link to={"/"}>Tee Rex Store</Link>
      </h1>
      <div>
        <nav>
          <Link
            className="pl-2"
            to="product"
            className="underline underline-offset-8	decoration-2"
          >
            {" "}
            Product
          </Link>
          <Link className="pl-2" to="cart">
            Cart {cart.length > 0 && cart.length}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
