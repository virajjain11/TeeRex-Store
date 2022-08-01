import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Navbar/Product/Filter";
import Productcard from "./components/Navbar/Product/Productcard";
import { fetchProduct } from "./store/ProductSlice";

function App() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.product.store);
  return (
    <div className="lg:w-11/12 m-auto">
      <Navbar />
      <div className="flex ">
        <Filter products={products} />
        <div className="flex flex-wrap">
          {products?.length > 0 &&
            products.map((product) => (
              <Productcard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
