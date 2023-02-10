const products = [
  {
    id: "1",
    name: "Harley Davidson Iron 883",
    price: 10000,
    category: "motorbikes",
    img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    stock: 8,
    description: "Brand New Harley Davidson Iron 883, only with 8.000 KM.",
  },
  {
    id: "2",
    name: "Leather Jacket",
    price: 500,
    category: "clothing",
    img: "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    stock: 16,
    description: "Amazing Fresh and Safety Jackets for Winter Riders",
  },
  {
    id: "3",
    name: "Gloves",
    price: 50,
    category: "accesories",
    img: "https://panthergloves.com/370/motorcycle-gloves-genuine-leather.jpg",
    stock: 8,
    description: "Unisex Gloves for Bikers. Available Winter and Summer options.",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
