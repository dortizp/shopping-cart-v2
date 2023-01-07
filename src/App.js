import { useState, useEffect } from "react";
import { ProductList } from "./components/ProductList";
import { getProducts } from "./services/products";
function App() {
  const [products, setProducts] = useState({});
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
    getProducts().then((value) => {
      setProducts(value);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      My shopping cart!
      {loading ? "loading..." : <ProductList products={products} />}
    </div>
  );
}

export default App;
