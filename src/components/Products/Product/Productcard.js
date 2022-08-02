import React from "react";
const Productcard = ({ product }) => {
  return (
    <div className="m-2 border-2 border-black	">
      <h1>{product.name}</h1>
      <img className="w-[350px]" src={product.imageURL} alt="image" />
      <div className="flex justify-between">
        <h2>{product.price}</h2>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Productcard;
