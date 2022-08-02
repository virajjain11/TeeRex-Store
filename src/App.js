import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import { fetchProduct } from "./store/ProductSlice";
import { Routes, Route } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="lg:w-11/12 m-auto">
      <Routes>
        {/* <Route /> */}
        <Navbar />
        <Product />
        <Cart />
      </Routes>
    </div>
  );
}

export default App;
