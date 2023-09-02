import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "pet-products");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setData(docs);
    });
  }, []);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailContainer;
