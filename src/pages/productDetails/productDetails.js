import React, { useEffect, useState } from 'react'
import './productDetails.css'
import { Link, useParams } from "react-router-dom";
import { addToCart } from '../../redux/actions/cartAction';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import QtyChange from '../../components/QtyChange';

const ProductDetails=()=> {

  const cart = useSelector((state)=>state.cartReducer.cart);
  const [data,setData]=useState(undefined)
  const params = useParams();
  const dispatch = useDispatch();
     
    const addToCartAction = ()=>{
      dispatch(addToCart(data));
    }

  
  const fetchProductDetails=async()=>{
        const response= await axios
        .get(`https://fakestoreapi.com/products/${params.productId}`);
        setData(response.data)
      }


    useEffect(()=>{
      if(!data)
        fetchProductDetails();
    })
  return (
      data && (<div className='product-details' key={data.id}>
      <div className='product-details-item'>
        <img className='product-img' src={data.image} alt='product'/>
      </div>
      <div className='product-detail-item product-content'>
        <div className='title'>{data.title}</div>
        <div className='description'>{data.description} </div>
        <div className='category'>Category: {data.category} </div>
        <div className='rating'>Rating:{data.rating.rate}/5 ({data.rating.count}) </div>
        <div className='price'>$ {data.price} </div>
        <div>
        <Link to={'/cart'} style={{textDecoration:'none' } } >
        <button type="button" class="button-style btn btn-outline-dark " onClick={()=> 
               addToCartAction()}>Buy Now</button>
               </Link>
               {
                 cart.get(data.id) ? 
                 <QtyChange item={cart.get(data.id)}/>
             :<button type="button" className="button-style btn btn-outline-dark " onClick={()=> 
               addToCartAction()
             } >Add to Cart</button>
           }
      </div>
      </div>
    </div>)
  
  )
}

export default ProductDetails