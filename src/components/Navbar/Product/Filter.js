import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColorFilter } from "../../../store/ProductSlice";

const Filter = ({ products }) => {
  const [color, setColor] = useState([]);
  const dispatch = useDispatch();
  // const store = useSelector((state) => console.log(state));
  let colorsArr = [];
  const gender = ["Male", "Female"];
  const type = ["Hoodie", "Basic", "Polo"];
  products?.length > 0 &&
    products?.map((product) => colorsArr.push(product.color));
  const uniqueColor = [...new Set(colorsArr)];

  useEffect(() => {
    // dispatch(addColorFilter(color));
    console.log(color);
  }, [color]);

  const handleSubmit = (e) => {
    let tempColor = e.target.value;
    if (color.includes(tempColor)) {
      console.log("eeee", tempColor, "is present");
      setColor((prev) => prev.filter((val) => val !== tempColor));
    } else {
      console.log(tempColor, "is not present");
      setColor((prev) => [...prev, tempColor]);
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
              id={`custom-checkbox-${index}`}
              name={color}
              value={color}
              onClick={handleSubmit}
            />
            <label
              htmlFor={`custom-checkbox-${index}`}
              className="pl-2 tracking-wide font-medium"
            >
              {color}
            </label>
          </li>
        );
      })}
    </div>
  );
};

export default Filter;
