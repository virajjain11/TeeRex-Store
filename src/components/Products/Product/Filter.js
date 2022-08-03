import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColorFilter } from "../../../store/ProductSlice";

const Filter = () => {
  const initialFilter = {
    Colour: [],
    Gender: [],
    Type: [],
  };
  const globalStore = useSelector((state) => state.product);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [filterItems, setFilterItems] = useState(initialFilter);

  useEffect(() => {
    const fetchAsync = async () => {
      const res = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const newRes = await res.json();
      setData(newRes);
    };
    fetchAsync();
  }, []);
  //
  const fil = {
    Colour: [],
    Gender: ["Male", "Female"],
    Type: ["Hoodie", "Basic", "Polo"],
    price: [],
  };

  let colorsArr = [];
  data?.length > 0 && data.map((product) => colorsArr.push(product.color));
  fil.Colour = [...new Set(colorsArr)];

  function FilterHere() {
    if (data.length > 0) {
      let newFilter = data.filter((obj) => {
        let valid = filterItems.Colour.includes(obj.color); // currently only filtering color and not any other filters
        // filterItems.gender.includes(obj.gender) &&
        // filterItems.productType.includes(obj.type);
        if (valid) return obj;
      });
      console.log(newFilter);
    }
  }
  useEffect(() => {
    FilterHere();
    console.log(filterItems);
    // dispatch(addColorFilter(filterItems));
    // console.log(filterItems);
  }, [filterItems, dispatch]);

  const handleSubmit = (e) => {
    let filterType = e.target.name;
    let tempColor = e.target.value;
    if (filterItems[filterType].includes(tempColor)) {
      console.log("eeee", tempColor, "is present");
      setFilterItems((prev) => ({
        ...prev,
        [filterType]: prev[filterType].filter((val) => val !== tempColor),
      }));
      // setColor((prev) => prev.filter((val) => val !== tempColor));
    } else {
      console.log(tempColor, "is not present");
      // setColor((prev) => [...prev, tempColor]);
      setFilterItems((prev) => ({
        ...prev,
        [filterType]: [...prev[filterType], tempColor],
      }));
    }
  };

  return (
    <div className="w-full shadow-lg pl-6 ">
      {data.length > 0 &&
        Object.entries(fil).map((filterHeading, idx) => {
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

export default Filter;
