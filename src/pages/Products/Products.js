import React,{useEffect} from 'react'
import axios from 'axios';
import './Products.css'
import {useSelector,useDispatch} from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { setProducts } from '../../redux/actions/productActions';

const Products = () => {
    const products= useSelector((state)=>state)
    const dispatch = useDispatch();

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
    console.log("products: ",products);
  return (
    <div>
        <h2>All Products</h2>
        <ProductCard/>
    </div>
  )
}

export default Products