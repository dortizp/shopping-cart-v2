import {Product} from "./Product"

const ProductList = ({products}) => {
    
  return (
      <div>
       {
        products.map( item => <Product product={item}/>)
       }
      </div>
  )
}

export {ProductList}