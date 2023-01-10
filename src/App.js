import { useState, useEffect } from "react";
import { ProductList } from "./components/ProductList";
import { getProducts } from "./services/products";
import { Header } from "./components/Header";
function App() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [list, filterList] = useState({});

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

  useEffect(() => {
    console.log("new products", products);
  }, [products]);

  return (
    <div>
      My shopping cart!
      <Header list={products} setProducts={setProducts} />
      {loading ? "loading..." : <ProductList products={products} />}
    </div>
  );
}

export default App;
