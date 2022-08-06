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
      let results = referenceStore.filter((eachObj) => {
        return (
          eachObj.name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
          eachObj.type.toLowerCase().startsWith(searchValue.toLowerCase()) ||
          eachObj.color.toLowerCase().startsWith(searchValue.toLowerCase()) ||
          eachObj.gender.toLowerCase().startsWith(searchValue.toLowerCase())
        );
      });
      if (results.length > 0) dispatch(addColorFilter(results));
      setSearchValue("");
    }
  };

  const handleKey = (e) => {
    if (e.charCode === 13) submitSearch();
  };
  return (
    <>
      <input
        type="text"
        className="border-2 border-slate-300	"
        value={searchValue}
        onChange={handleChange}
        name="search here"
        onKeyPress={handleKey}
      />
      <label onClick={submitSearch}>Search</label>
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
