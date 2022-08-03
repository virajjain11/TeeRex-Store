import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart);
  console.log(cartItems);
  return (
    <div className="m-4">
      <h1 className="text-xl font-medium tracking-wide">Shopping Cart</h1>
      <div className="mt-10">
        {cartItems?.length > 0 &&
          cartItems.map((el, idx) => {
            return <CartCard key={idx} item={el} />;
          })}
      </div>
    </div>
  );
};

export default Cart;
