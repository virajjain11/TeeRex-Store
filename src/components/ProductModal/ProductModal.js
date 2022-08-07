import React from "react";
import { useSelector } from "react-redux";
import Filter from "./FilterCard/Filter";
import Productcard from "./ProductCard/Productcard";
import SearchBar from "./SearchBar/SearchBar";

const ProductModal = () => {
  let globalStore = useSelector((state) => state.product);
  const { store: products } = globalStore;

  return (
    <>
      <SearchBar />
      <div className="flex justify-start sm:ml-6 mb-10  mt-10">
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

export default ProductModal;
