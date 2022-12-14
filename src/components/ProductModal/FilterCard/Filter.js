import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addColorFilter } from "../../../store/ProductSlice";

const FilterCard = () => {
  const initialFilter = {
    Colour: [],
    Gender: [],
    Type: [],
  };
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [filterItems, setFilterItems] = useState(initialFilter);

  useEffect(() => {
    const fetchAsync = async () => {
      const res = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const newResData = await res.json();
      setData(newResData);
      dispatch(addColorFilter(newResData));
    };
    fetchAsync();
  }, []);

  const filters = {
    Colour: [],
    Gender: ["Men", "Women"],
    Type: ["Hoodie", "Basic", "Polo"],
    // price: [],
  };

  let colorsArr = [];
  data?.length > 0 && data.map((product) => colorsArr.push(product.color));
  filters.Colour = [...new Set(colorsArr)];

  function FilterHere() {
    let filterGender;
    let filterType;
    let filterColour;

    if (data.length > 0) {
      if (filterItems.Colour.length > 0) {
        filterColour = data.filter((eachProduct) => {
          let valid = filterItems.Colour.includes(eachProduct.color); // currently only filtering color and not any other filters
          if (valid) return eachProduct;
        });
      } else {
        filterColour = data;
      }
      if (filterItems.Gender.length > 0) {
        filterGender = filterColour.filter((product) => {
          let valid = filterItems.Gender.includes(product.gender);
          if (valid) return product;
        });
      } else {
        filterGender = filterColour;
        console.log("gender is empty", filterGender);
      }
      if (filterItems.Type.length > 0) {
        filterType = filterGender.filter((product) => {
          let valid = filterItems.Type.includes(product.type);
          if (valid) return product;
        });
      } else {
        //no Types
        filterType = filterGender;
      }

      dispatch(addColorFilter(filterType));
    }
  }

  useEffect(() => {
    FilterHere();
    // dispatch(addColorFilter(filterItems));
  }, [filterItems, dispatch]);

  const handleSubmit = (e) => {
    let filterType = e.target.name;
    let currentColorSelected = e.target.value;

    if (filterItems[filterType].includes(currentColorSelected)) {
      // console.log("eeee", currentColorSelected, "is present");
      setFilterItems((prevValue) => ({
        ...prevValue,
        [filterType]: prevValue[filterType].filter(
          (eachFilteredValue) => eachFilteredValue !== currentColorSelected
        ),
      }));
    } else {
      // console.log(currentColorSelected, "is not present in", filterType);
      setFilterItems((prevValue) => ({
        ...prevValue,
        [filterType]: [...prevValue[filterType], currentColorSelected],
      }));
    }
  };

  return (
    <div className="md:w-[250px] w-[200px] shadow-lg pl-6 sm:block hidden ">
      {data.length > 0 &&
        Object.entries(filters).map((filterHeading, idx) => {
          return (
            <>
              <h1 className="text-xl font-medium pt-3 pb-2" key={idx}>
                {filterHeading[0]}
              </h1>
              {filterHeading[1].map((filter, index) => {
                return (
                  <>
                    <li className="list-none pb-1 pl-1" key={`list-${index}`}>
                      <input
                        key={`input-${index}`}
                        type="checkbox"
                        id={`checkbox-${filter}-${index}`}
                        name={filterHeading[0]}
                        value={filter}
                        onClick={handleSubmit}
                      />
                      <label
                        key={`label-${index}`}
                        htmlFor={`checkbox-${filter}-${index}`}
                        className="pl-3  pb-1tracking-wide font-medium"
                      >
                        {filter}
                      </label>
                    </li>
                  </>
                );
              })}
            </>
          );
        })}
    </div>
  );
};

export default FilterCard;
