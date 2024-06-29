import React from 'react'
import "./BreadCum.css"
import arrow_icon from "../Assets/breadcrum_arrow.png";
const BreadCum = ({product}) => {
  return (
    <main className="BreadCum">
         Home <img src={arrow_icon} alt="arrow_icon" /> SHOP <img src={arrow_icon} alt="arrow_icon" /> {product.category}  <img src={arrow_icon} alt="arrow_icon" /> { product.name}
    </main>
  )
}

export default BreadCum