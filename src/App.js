import { useState, useEffect } from "react";
import { Product } from "./components/Product";
import { getProduct } from "./services/product";
function App() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // with useEffect and async/await
  // useEffect(() => {
  //   async function fetchData() {
  //     setProduct(await getProduct());
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // with then: infinite loop by changing state inside asyn function
  // getProduct().then((value) => {
  //   setProduct(value);
  //   setLoading(false);
  // });

  // with useEffect and then
  useEffect(() => {
    getProduct().then((value) => {
      setProduct(value);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      My shopping cart!
      {loading ? "loading..." : <Product product={product} />}
    </div>
  );
}

export default App;
