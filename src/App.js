import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Navbar/Product/Filter";
import Productcard from "./components/Navbar/Product/Productcard";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const newData = await res.json();
      setData(newData);
      // log
    };
    fetchData();
    console.log(data);
  }, []);
  return (
    <div className="lg:w-4/5 m-auto">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar />
      <div className="flex justify-around">
        <Filter />

        <Productcard />
      </div>
    </div>
  );
}

export default App;
