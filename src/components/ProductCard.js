import React from 'react'
import {useSelector} from "react-redux"
import './ProductCard.css'

const ProductCard = () => {
    const products = useSelector((state)=>state.allProducts.products);
    console.log(products)
    const renderProducts=products.map((product)=>{
            const {id,title,image,price,category,rating}=product;
        return (
            <div className="card" style={{width: '18rem'}} key={id}>
                    <img src={image} className="card-img-top" alt="dfngkj" />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item category" >{category}</li>
                      <li className="list-group-item rating">Rating: {rating.rate}/5</li>
                      <li className="list-group-item price" >$ {price}</li>
                    </ul>
                    <div className="card-body card-buttons">
                    <button type="button" class="btn btn-outline-dark">Buy Now</button>
                    <button type="button" class="btn btn-outline-dark">Add to Cart</button>
                    
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