const Product = ({product}) => {
    const {title, description, price} = product
    return (
        <>
        <div>Product</div>
        <span>{title}</span>
        <span>{description}</span>
        <span>{price}</span>
        </>
    )
}

export {Product}