import React from "react";
import "./popular.css";
import Item from "../Item/Item";
import data_product from "../Assets/data";

const Popular = () => {
  return (
    <main className="popular">
      <h1>PPOULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Popular;
