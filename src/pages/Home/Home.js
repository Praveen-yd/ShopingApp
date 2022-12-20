import React from 'react'
import Banner from '../../components/Banner'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div style={{backgroundColor:'lightgrey'}}>
        <Banner/>
        <Products/>
    </div>
  )
}

export default Home