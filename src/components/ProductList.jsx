import {Product} from "./Product"

const ProductList = ({products}) => {
  return (
      <div>
       {
        products.length
        ? products.map( item => <Product key={item.id} product={item}/>)
        : null
       }
      </div>
  )
}

export {ProductList}