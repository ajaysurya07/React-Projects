import React from "react";
import { Link } from "react-router-dom";
import "./item.css";
const item = (props) => {
  return (
    <article className="item">
      <Link to={`/product/${props.id}`}>
        <img 
        onClick={window.scrollTo(0,0)}  // on clicking to go to top of the page.
        src={props.img} alt="product_thumbnail" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item_price_new">${props.new_price}</div>
        <div className="item_price_old">${props.old_price}</div>
      </div>
    </article>
  );
};

export default item;
