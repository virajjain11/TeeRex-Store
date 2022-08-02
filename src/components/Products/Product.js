import React from "react";
import { useSelector } from "react-redux";
import Filter from "./Product/Filter";
import Productcard from "./Product/Productcard";
const Product = () => {
  const products = useSelector((state) => state.product.store);
  return (
    <>
      <div className="flex ">
        <div className="w-2/4">
          <Filter className="" products={products} />
        </div>
        <div className="flex flex-wrap">
          {products?.length > 0 &&
            products.map((product) => (
              <Productcard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Product;
