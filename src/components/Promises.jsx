import React from "react";

const Promises = () => {
  const productos = [
    {
      id: 1,
      nombre: "Producto A",
      description: "Descripción de Producto A",
      stock: 24,
      price: '$100.00'
    },
    {
      id: 2,
      nombre: "Producto B",
      description: "Descripción de Producto B",
      stock: 13,
      price: '$100.00'
    },
    {
      id: 3,
      nombre: "Producto C",
      description: "Descripción de Producto C",
      stock: 8,
      price: '$100.00'

    },
    {
      id: 4,
      nombre: "Producto D",
      description: "Descripción de Producto D",
      stock: 17,
      price: '$100.00'
    },
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No se encontraron Productos"));
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  async function getProduct() {
    try {
        const fetchedProducts = await getProducts()
        console.log(fetchedProducts)
    } catch (error) {
        console.error(error)
    }
  }
  getProduct();

  return <div>Promises</div>;
};

export default Promises;
