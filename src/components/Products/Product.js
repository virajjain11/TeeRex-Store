import React from "react";
import { useSelector } from "react-redux";
import Filter from "./Product/Filter";
import Productcard from "./Product/Productcard";
const Product = () => {
  const products = useSelector((state) => state.product.store);
  return (
    <>
      <div className="flex justify-start sm:ml-6 mb-10 ">
        <div className=" sm:mr-6 md:mr-10 ">
          <Filter />
        </div>
        <div className="flex sm:ml-4 flex-wrap">
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
