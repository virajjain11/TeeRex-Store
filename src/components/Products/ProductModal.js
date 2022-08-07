import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColorFilter } from "../../store/ProductSlice";
import Filter from "./Product/Filter";
import Productcard from "./Product/Productcard";

const ProductModal = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  let globalStore = useSelector((state) => state.product);
  const { referenceStore } = globalStore;
  const { store: products } = globalStore;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const submitSearch = () => {
    if (searchValue.length > 0) {
      let filteredProducts = referenceStore.filter((eachProduct) => {
        return (
          eachProduct.name
            .toLowerCase()
            .startsWith(searchValue.toLowerCase()) ||
          eachProduct.type
            .toLowerCase()
            .startsWith(searchValue.toLowerCase()) ||
          eachProduct.color
            .toLowerCase()
            .startsWith(searchValue.toLowerCase()) ||
          eachProduct.gender.toLowerCase().startsWith(searchValue.toLowerCase())
        );
      });
      if (filteredProducts.length > 0)
        dispatch(addColorFilter(filteredProducts));
      setSearchValue("");
    }
  };

  const handleKey = (e) => {
    if (e.charCode === 13) submitSearch();
  };
  return (
    <>
      <div className=" lg:ml-[40%] sm:mr-[20%] mx-auto w-[300px] sm:w-[500px] mt-8">
        <input
          type="text"
          className="border-b-2 border-slate-300 w-[170px] sm:w-[350px]  focus:outline-0	px-2	"
          value={searchValue}
          onChange={handleChange}
          name="search"
          placeholder="Search for products..."
          onKeyPress={handleKey}
        />
        <label htmlFor="search" className="px-4" onClick={submitSearch}>
          Search
        </label>
      </div>

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
