import React from 'react'
import './QtyChange.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../redux/actions/cartAction';

const QtyChange = (props) => {
    const products = useSelector((state)=>state.allProducts.products);
    const dispatch = useDispatch();
    // console.log({item})
    const addToCartAction = (product)=>{
        dispatch(addToCart(product));
      }
      const removeFromCartAction =(product)=>{
        dispatch(removeFromCart(product));
      }
      const {qty}=products;
      console.log('product.qty :',products)
  return (
    <div class="btn-group" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-secondary button" onClick={()=> 
                      removeFromCartAction( props.item)
                    }>-</button>
                          <div class="btn btn-dark button" >{props.item.qty}</div>
                          <button type="button" className="btn btn-secondary button" onClick={()=> 
                      addToCartAction(props.item)
                    }>+</button>
                      </div>
  )
}

export default QtyChange