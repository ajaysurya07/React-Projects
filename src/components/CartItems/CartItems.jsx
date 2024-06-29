import React, { useContext } from 'react'
import "./CartItems.css"
import DataContext from '../../context/dataContext'
import removeIcon from "../Assets/cart_cross_icon.png"
const CartItems = () => {

  const {all_product , 
    cartItem,
    removeFromoCart,getTotalAmount}  = useContext(DataContext);

  return (
    <main className="CartItems">
         <div className="CartItems_format_main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
         </div> 
         <hr />
          {all_product.map((e) =>{
               if(cartItem[e.id] >0){
                   return  <div>
                   <div className="CartItems_format CartItems_format_main">
                       <img src= {e.image} alt= "imgae_thumbnail" className='cartIcon-product_icon'/>
                       <p>{e.name}</p>
                       <p>${e.new_price}</p>
                       <button className='cartItems_quantity'>{cartItem[e.id]}</button>
                       <p>{e.new_price*cartItem[e.id]}</p>
                       <img src= {removeIcon}  alt="" onClick={() => {removeFromoCart(e.id)}} className='cartItem_remove_icon'/>
                   </div>
                   <hr />
                </div>
               }
               else{
                   return null
               }
          })}
          <div className="cartItem_down">
              <div className="cartItem_total">
                      <h1>Cart Total</h1>
                      <div>
                            <div className="cartItem_total-item">
                               <p>subtotal</p>
                               <p>${getTotalAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartItem_total-item">
                               <p>Shipping Free</p>
                               <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartItem_total-item">
                                <h3>Total</h3>
                                <h3>${getTotalAmount()}</h3>
                            </div>
                      </div>
                      <button>PROCEED TO CHECK OUT</button>
              </div>
              <div className="cartItems-promocode">
                   <p>If you have a promo code enter it here</p>
                   <div className="cartItem-promocode">
                       <input type="text"  placeholder='prom code'/>
                       <button>Submit</button>
                   </div>
              </div>
          </div>
    </main>
  )
}

export default CartItems;
/* 
onClick(() => {removeFromoCart(e.id)})
*/