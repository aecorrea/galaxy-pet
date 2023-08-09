import React, { useEffect, useState }  from 'react'
import Counter from './Counter'
import Cards from './Item'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

  const {category} = useParams();
  

  const [data, setData] = useState([]);
useEffect(() => {
  fetchedData();
},[])


  const fetchedData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
  setData(jsonData);
}

const filteredProducts = data.filter((p) => p.category == category);

  return (
    <div className="itemListContainer"> 
      
      <ItemList data={filteredProducts} />

    </div>

  )
}

export default ItemListContainer