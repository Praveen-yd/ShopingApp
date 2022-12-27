import React,{useEffect} from 'react'
import axios from 'axios';
import './Products.css'
import {useSelector,useDispatch} from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { setProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartAction';

const Products = () => {

    const products = useSelector((state)=>state.allProducts.products);
    const searchText = useSelector((state)=>state.allProducts.searchText);
    console.log({searchText})
    const cart = useSelector((state)=>state.cartReducer.cart);
    console.log(cart)
    const dispatch = useDispatch();

    function filterByValue(array, string) {     
      return array.filter(o => 
        { return Object.keys(o).some(k => 
          {if(typeof o[k] === 'string')
           return o[k].toLowerCase().includes(string.toLowerCase());
           });
          }); 
        }
    const getProductList = ()=>{
      if(searchText === ''){
        return products;
      }else{
        return filterByValue(products,searchText);
      }
    }

    const renderProducts=getProductList();
    console.log(renderProducts)

    


 const fetchProducts=async()=>{
        const response= await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Error",err)
        });
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <div>
        <div className='products-header'>
        <h2>All Products</h2>
        <Link to={`/products`} style={{textDecoration:'none' } }>
        <p>See more ...</p>
        </Link>
        </div>
        {renderProducts.length >0 ? (
          <div className='card-list'>
        {renderProducts.map((product)=>{
         return <ProductCard product={product}/>
        }
        )}
        </div>
       
        )
         : <>No product found</>}  
    </div>
  )
}

export default Products