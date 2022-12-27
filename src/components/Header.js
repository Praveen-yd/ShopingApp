import React, { useEffect } from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import {CalculateTotalItemInCart} from '../utils/util'
import SearchBar from './searchBar';

const Header = () => {
  const cart = useSelector((state)=>state.cartReducer.cart);
     
    const totalItems = CalculateTotalItemInCart(cart);
    const location = useLocation();
    console.log(location.pathname)
 
     return (
    <div className="header">
      <Link to={'/home'} style={{textDecoration:'none' } } >
      <div>
        
        <img
          className="header__logo"
          src="https://lineshoppingseller.com/images/logo/my-shop-logo.svg "
          alt="amazon logo"
        />
      </div>
      </Link>
      <div className="header__search">
        {(location.pathname=='/home'|| location.pathname =='/products')&& 
      <SearchBar />
     }
        {/* <SearchIcon className="header__searchIcon"></SearchIcon> */}
      </div>
      <Link to={'/cart'} style={{textDecoration:'none' } } >
        <div className="header__elements">
          <AddShoppingCartOutlinedIcon fontSize="large" />

          <div className="header__option">
            <span className="header__optionLineOne header__cartCount">
              {totalItems}
              </span>
            <span className="header__optionLineTwo">Cart</span>
          </div>
      </div>
          </Link>
    </div>

  )
}

export default Header