import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";
const DataContext = createContext({});

// make a default cart thqts we are just inilaize ell the data as zero
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const DataProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromoCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalAmount = () => {
    let totalAmount = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        console.log(itemInfo);
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

 const getTotalItems =() =>{
        let totalItem =0;

        for(const item in cartItem){
             if(cartItem[item] >0){
                 totalItem += cartItem[item];
             }
        }
        return totalItem;
      }

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromoCart,
    getTotalAmount,
    getTotalItems
  };
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
