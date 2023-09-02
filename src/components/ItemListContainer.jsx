import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    if (data.length === 0) {
      const itemsCollection = collection(db, "pet-products");
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setData(docs);
        setLoading(false);
      });
    }
  }, []);

  const filteredProducts =
    category == "all" ? data : data.filter((p) => p.category == category);

  return loading ? (
    <span className="loader"></span>
  ) : (
    <div className="itemListContainer">
      <ItemList data={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
