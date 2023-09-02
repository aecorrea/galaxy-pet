import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.map((p) => {
        return (
          <Item
            id={p.id}
            title={p.title}
            description={p.description}
            category={p.category}
            price={p.price}
            image={p.image}
          />
        );
      })}
    </>
  );
};

export default ItemList;
