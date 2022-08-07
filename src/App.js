import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import ProductModal from "./components/ProductModal/ProductModal";
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
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/product" />} />
          <Route path="/product" element={<ProductModal />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
