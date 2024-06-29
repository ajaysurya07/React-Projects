import React from 'react'
import "./RelatedProducts.css"
import  data_product from "../Assets/data" 
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <main className="RelatedProducts">
        <h1>Related Products</h1>
        <hr />
        <div className="RelatedProducts_items">
              {data_product.map((item , i) => {
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
  )
}

export default RelatedProducts