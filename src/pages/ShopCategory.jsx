import React, { useContext } from "react";
import "./CSS/shopCategory.css";
import DataContext from "../context/dataContext";
import drowDownicon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(DataContext);

  return (
    <main className="shopCategory">
      <img
        className="shopCategory_banner"
        src={props.banner}
        alt="category_banner"
      />
      <div className="shopcategory_indexsort">
        <p>
          <span>showing 1-12</span>
          out of 54 Products
        </p>
        <div className="indexsort">
          sort by <img src={drowDownicon} alt="drowDownicon" />
        </div>
      </div>
      <div className="shopcategory_poducts">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">
          Explore More
      </div>
    </main>
  );
};

export default ShopCategory;
