const getProducts = () => {
  const products = [
    {
    title: "milk",
    description: "box of milk 1L",
    price: 10,
    },
    {
      title: "beer",
      description: "six pack",
      price: 15,
    },
    {
      title: "meat",
      description: "1kg of meat",
      price: 20
    }
  ]
    
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export { getProducts };
