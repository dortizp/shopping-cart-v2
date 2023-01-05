const getProduct  = () => {
    setInterval(
        () => {
              const product = {
                title: "milk",
                description: "box of milk 1L",
                price: 10
            }
            console.log("product", product)
            return product
        }
        ,3000
    )
}

export {getProduct}
