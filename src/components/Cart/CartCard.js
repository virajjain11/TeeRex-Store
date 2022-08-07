import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterItemFromCart } from "../../store/ProductSlice";

const CartCard = ({ item }) => {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const id = Number(e.target.id);
    const newCart = cart.filter((product) => product.id !== id);
    const itemRemoved = cart.filter((product) => product.id === id);

    dispatch(filterItemFromCart(newCart));
  };
  return (
    <>
      <div
        id={item.id}
        className="flex justify-around content-center md:space-x-2 sm:justify-start sm:mx-0 max-w-[450px] sm:max-w-[600px]"
      >
        <div className=" max-w-[90px] max-h-[120px] sm:max-w-[150px] flex content-center justify-center">
          <img src={item.imageURL} alt="img" />
        </div>
        <div className="p-2  flex flex-col content-center justify-center font-semibold ">
          <span className="px-2">{item.name}</span>
          <span className="px-2">Rs {item.price}</span>
        </div>
        <div className=" sm:mx-2 my-auto">
          <span className=" py-2 sm:px-6 px-3 rounded-sm  bg-slate-300 font-semibold text-center">
            Qty {item.quantity}
          </span>
        </div>
        <div className="flex">
          <button
            id={item.id}
            className="border sm:px-6 px-3 py-2 rounded-sm font-semibold sm:mx-4 mx-1 my-auto"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
