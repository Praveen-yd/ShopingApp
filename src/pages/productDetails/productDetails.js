import React from 'react'
import './productDetails.css'
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails=()=> {
  const params = useParams();

  const products = useSelector((state)=>state.allProducts.products);
  const filteredList = products.filter((product)=>(product.id)==(params.productId));
  const {id,title,image,price,category,rating,description} = filteredList[0]
  return (
    <div className='product-details' key={id}>
      <div className='product-details-item'>
        <img className='product-img' src={image} alt='product'/>
      </div>
      <div className='product-detail-item product-content'>
        <div className='title'>{title}</div>
        <div className='description'>{description} </div>
        <div className='category'>Category: {category} </div>
        <div className='rating'>Rating:{rating.rate}/5 ({rating.count}) </div>
        <div className='price'>$ {price} </div>
        <button className='button'>Buy Now</button>
      </div>

    </div>
  )
}

export default ProductDetails