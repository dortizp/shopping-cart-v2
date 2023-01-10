const getProducts = () => {
  const products = [
    {
      id: 1,
      title: "milk",
      description: "box of milk 1L",
      price: 10,
    },
    {
      id: 2,
      title: "beer",
      description: "six pack",
      price: 15,
    },
    {
      id: 3,
      title: "meat",
      description: "1kg of meat",
      price: 20,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export { getProducts };
