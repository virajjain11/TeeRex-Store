import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterItemFromCart } from "../../../store/ProductSlice";

const Productcard = ({ product }) => {
  const dispatch = useDispatch();
  const globalStore = useSelector((state) => state.product);
  const { cart } = globalStore;
  const { referenceStore } = globalStore;

  const handleAdd = (e) => {
    const id = Number(e.target.id);
    const referenceProduct = referenceStore.find(
      (cartProuct) => cartProuct.id === id
    );
    if (cart.length > 0) {
      var productPresentInCart = cart.find(
        (cartProuct) => cartProuct.id === id
      );
      if (productPresentInCart) {
        alert("items out of stock");
      } else {
        if (referenceProduct.quantity) {
          const newCart = [...cart, referenceProduct];
          dispatch(filterItemFromCart(newCart));
        } else {
          alert("items out of stock");
        }
      }
    } else {
      dispatch(filterItemFromCart([referenceProduct]));
    }
  };

  return (
    <div className="m-2 mx-4 p-4 shadow-lg hover:shadow-2xl border-black my-4	">
      <h1 className="font-bold text-xl pb-2">{product.name}</h1>
      <img className="w-[350px] h-[310px]" src={product.imageURL} alt="image" />
      <div className="flex justify-between mt-6 items-center">
        <p className="pl-6 font-semibold text-lg">Rs {product.price}</p>
        <button
          id={product.id}
          onClick={handleAdd}
          className="bg-slate-800 py-2 px-6 rounded-md text-slate-50 mr-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;
