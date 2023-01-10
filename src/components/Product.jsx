const Product = ({product}) => {
    const {title, description, price} = product
    console.log('product in product', product)
    return (
        <>
        <hr></hr>
        <p>title: {title}</p>
        <p>description: {description}</p>
        <p>price: ${price}</p>
        </>
    )
}

export {Product}