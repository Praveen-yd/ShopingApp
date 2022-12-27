import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import './ProductCard.css'
import { addToCart } from '../redux/actions/cartAction';
import QtyChange from './QtyChange';


const ProductCard = (props) => {
  const {id,title,image,price,category,rating,qty}=props.product;
      
  const cart = useSelector((state)=>state.cartReducer.cart);
  const dispatch = useDispatch();
     
    const addToCartAction = ()=>{
      dispatch(addToCart(props.product));
    }
   
    
    return (
        
        <div className="card" key={id}>
       <Link to={`/product/${id}`} style={{textDecoration:'none' } }>
   
             <img src={image} className="card-img-top" alt="dfngkj" />
             <div className="card-body">
               <h5 className="card-title">{title}</h5>
             </div>
      </Link>
         
             <ul className="list-group list-group-flush">
              <div>
               <li className="list-group-item category" >{category}</li>
               <li className="list-group-item rating">Rating: {rating.rate}/5</li>
               </div>
               <li className="list-group-item price" >$ {price} </li>
             </ul>
             <div className="card-body card-buttons">
             <Link to={'/cart'} style={{textDecoration:'none' } } >
             <button type="button" class="btn btn-outline-dark button-bg" onClick={()=> 
               addToCartAction()}>Buy Now</button>
               </Link>
             {
                 cart.get(id) ? 
                 <QtyChange item={cart.get(id)}/>
             :<button type="button" className="btn btn-outline-dark button-bg" onClick={()=> 
               addToCartAction()
             } >Add to Cart</button>
           }
             
             </div>
           </div>
             
    )
        }

export default ProductCard;