import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColorFilter } from "../../../store/ProductSlice";

const Filter = ({ products }) => {
  const initialFilter = {
    color: [],
    gender: [],
    dressType: [],
  };
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

  const globalStore = useSelector((state) => state.product);
  let colorsArr = [];
  const gender = ["Male", "Female"];
  const productType = ["Hoodie", "Basic", "Polo"];
  products?.length > 0 &&
    products?.map((product) => colorsArr.push(product.color));
  const uniqueColor = [...new Set(colorsArr)];

  function FilterHere() {
    let { store } = globalStore;
    if (data.length > 0) {
      // console.log(data);
      let newFilter = data.filter((obj) => {
        let valid = filterItems.color.includes(obj.color);
        // filterItems.gender.includes(obj.gender) &&
        // filterItems.productType.includes(obj.type);
        if (valid) return obj;
      });
      console.log(newFilter);
    }
  }
  useEffect(() => {
    // FilterHere();
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
    <div className="w-2/4">
      {/* <h2 className="text-lg font-bold">Color</h2>
      <div>
        {uniqueColor?.map((color) => (
          <h1 key={color} id={color} onClick={handleSubmit}>
            {color}
          </h1>
        ))}
      </div>
      <div>
        <input type={"checkbox"} checked={false} />
      </div>
      <h2 className="text-lg font-bold">Gender</h2>
      <div>
        {gender?.map((el) => (
          <h1>{el}</h1>
        ))}
      </div>
      <h2 className="text-lg font-bold">Type</h2>
      <div>
        {type?.map((el) => (
          <h1>{el}</h1>
        ))}
      </div> */}
      Filter
      {uniqueColor?.map((color, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              name="color"
              value={color}
              onClick={handleSubmit}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="pl-2 tracking-wide font-medium"
            >
              {color}
            </label>
          </li>
        );
      })}
      {productType?.map((category, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              name="dressType"
              value={category}
              onClick={handleSubmit}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="pl-2 tracking-wide font-medium"
            >
              {category}
            </label>
          </li>
        );
      })}
      {gender?.map((eachGender, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              name="gender"
              value={eachGender}
              onClick={handleSubmit}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="pl-2 tracking-wide font-medium"
            >
              {eachGender}
            </label>
          </li>
        );
      })}
    </div>
  );
};

export default Filter;
