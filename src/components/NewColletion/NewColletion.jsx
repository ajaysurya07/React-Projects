import React from "react";
import "./NewColletion.css";
import Item from "../Item/Item";
import new_collections from "../Assets/new_collections";
const NewColletion = () => {
  return (
    <main className="NewColletion">
      <h1>New Colletion</h1>
      <hr />
      <div className="colletion">
        {new_collections.map((item, i) => {
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

export default NewColletion;
