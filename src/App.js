import {useState, useEffect} from "react"
import {Product} from "./components/Product"
import {getProduct} from "./services/getProduct"
function App() {
  const [product, setProduct] = useState({})
  useEffect(()=>{
    setProduct(getProduct())
  },[]
  )
  console.log(product)
  return (
    <div>
    My shopping cart!
    {!product
    ? "loading..."
    :  <Product 
      title={product.title}
      description={product.description}
      price={product.price}
      />
    }
   </div>
  );
}

export default App;
