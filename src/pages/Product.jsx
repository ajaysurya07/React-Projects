import React, { useContext } from 'react'
import DataContext from '../context/dataContext'
import { useParams } from 'react-router-dom';
import BreadCum from '../components/BreadCum/BreadCum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(DataContext);
  const {product_ID} = useParams();
  /* console.log(`product id == > ${Number(product_ID)}`);
  console.log(all_product); */
  const product = all_product.find((e) =>{ 
    
    return e.id === Number(product_ID)  });
    
  /*   console.log(product);
  console.log("product detial ==>");
  console.log(product); */
  return (
    <div className="Product">
              <BreadCum   
                product = {product}/> 
               <ProductDisplay 
              product = {product} />
              <DescriptionBox/>
              <RelatedProducts />
    </div>
  )
}

export default Product