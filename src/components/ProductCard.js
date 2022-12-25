import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import './ProductCard.css'
import { addToCart,removeFromCart } from '../redux/actions/cartAction';
import QtyChange from './QtyChange';
const ProductCard = () => {
    const products = useSelector((state)=>state.allProducts.products);
    const cart = useSelector((state)=>state.cartReducer.cart);
    const dispatch = useDispatch();

    const addToCartAction = (product)=>{
      dispatch(addToCart(product));
    }
    const removeFromCartAction =(product)=>{
      dispatch(removeFromCart(product));
    }

    console.log(products)
    const renderProducts=products.map((product)=>{
            const {id,title,image,price,category,rating,qty}=product;
            console.log('product.qty :',product.qty)
        return (
            <div className="card" style={{width:'21rem'}} key={id}>
              <Link to={`/product/${id}`} style={{textDecoration:'none' } }>
          
                    <img src={image} className="card-img-top" alt="dfngkj" />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                    </div>
                    </Link>
                
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item category" >{category}</li>
                      <li className="list-group-item rating">Rating: {rating.rate}/5</li>
                      <li className="list-group-item price" >$ {price} </li>
                    </ul>
                    <div className="card-body card-buttons">
                    <Link to={'/cart'} style={{textDecoration:'none' } } >
                    <button type="button" class="btn btn-outline-dark button-bg" onClick={()=> 
                      addToCartAction(product)}>Buy Now</button>
                      </Link>
                    {
                        cart.get(id) ? 
                        <QtyChange item={cart.get(id)}/>
                    :<button type="button" className="btn btn-outline-dark button-bg" onClick={()=> 
                      addToCartAction(product)
                    } >Add to Cart</button>
                  }
                    
                    </div>
                  </div>
                );
    })
    console.log(renderProducts)
    return (
        <div className='card-list'>
        {renderProducts}
                </div>
    )
        }

export default ProductCard;