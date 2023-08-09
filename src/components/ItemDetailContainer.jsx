import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  };

  return (
    <>
      <ItemDetail data={data}
       />
    </>
  );
};

export default ItemDetailContainer;
