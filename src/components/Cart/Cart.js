import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart);
  console.log(cartItems);
  return (
    <div className="m-4">
      <h1 className="text-2xl font-medium tracking-wide sm:mt-8 mt-6 sm:ml-6 text-center sm:text-left">
        Shopping Cart
      </h1>
      <div className="mt-10 space-y-6 sm:ml-12">
        {cartItems?.length > 0 &&
          cartItems.map((el, idx) => {
            return <CartCard key={idx} item={el} />;
          })}
      </div>
    </div>
  );
};

export default Cart;
