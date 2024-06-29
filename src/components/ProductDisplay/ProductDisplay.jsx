import React, { useContext } from "react";
import "./ProductDisplay.css";
import starticon from "../Assets/star_icon.png";
import startdullicon from "../Assets/star_dull_icon.png";
import DataContext from "../../context/dataContext";
const ProductDisplay = ({ product }) => {

const {addToCart} = useContext(DataContext);

  return (
    <main className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-lmageList ">
          <img src={product.image} alt="ProductDisplay" />
          <img src={product.image} alt="ProductDisplay" />
          <img src={product.image} alt="ProductDisplay" />
          <img src={product.image} alt="ProductDisplay" />
        </div>
        <div className="ProductDisplay-img">
          <img className="ProductDisplay-main_img" src={product.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay_right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right_star">
          <img src={starticon} alt="" />
          <img src={starticon} alt="" />
          <img src={starticon} alt="" />
          <img src={starticon} alt="" />
          <img src={startdullicon} alt="" />
          <p>(122)</p>
        </div>
        <div className="ProductDisplay_right_pricecs">
          <div className="ProductDisplay_right_prices_old">
            ${product.old_price}
          </div>
          <div className="ProductDisplay_right_prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="ProductDisplay_right_description">
          A lightweight , usually knitted , pullover shirt, close-fitting and
          western a round neckine ans short sleeves ,worn sa a unsershirt or
          outershirt garment.
        </div>
        <div className="ProductDisplay_right_size">
          <h1>Select Size</h1>
          <div className="ProductDisplay_right_size2">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>Add To Cart</button>
        <p className="ProductDisplay_right_category">
          <span>Category :</span> Women, T-shirt , Crop Top
        </p>
        <p className="ProductDisplay_right_category">
          <span>Tags :</span>Modern Latest
        </p>
      </div>
    </main>
  );
};

export default ProductDisplay;
