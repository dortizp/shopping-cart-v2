const getProduct = () => {
  const product = {
    title: "milk",
    description: "box of milk 1L",
    price: 10,
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 3000);
  });
};

export { getProduct };
