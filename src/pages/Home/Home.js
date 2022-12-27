import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Products from '../Products/Products'

const Home = () => {
  const searchText = useSelector((state)=>state.allProducts.searchText);
    
  return (
    <div>
        { searchText.length<=0 && <Banner/>}
        <Products/>
       
    </div>
  )
}

export default Home