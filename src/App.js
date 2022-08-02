import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import { fetchProduct } from "./store/ProductSlice";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="lg:w-11/12 m-auto">
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/product" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

//search any item
// for (let k in obj) {
//   if (obj[k] === "test1") {
//       return true;
//   }
// }

// var theObj = { foo: "bar" };
// var hasVal = Object.values(theObj).includes("bar");
