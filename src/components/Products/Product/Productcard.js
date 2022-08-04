import React from "react";
const Productcard = ({ product }) => {
  return (
    <div className="m-2 mx-4 p-4 shadow-lg hover:shadow-2xl border-black my-4	">
      <h1 className="font-bold text-xl pb-2">{product.name}</h1>
      <img className="w-[350px] h-[310px]" src={product.imageURL} alt="image" />
      <div className="flex justify-between mt-6 items-center">
        <p className="pl-6 font-semibold text-lg">Rs {product.price}</p>
        <button className="bg-slate-800 py-2 px-6 rounded-md text-slate-50 mr-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;
