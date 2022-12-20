import React from 'react'
import "./Header.css";

import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="header__logo"
          src="https://lineshoppingseller.com/images/logo/my-shop-logo.svg "
          alt="amazon logo"
        />
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder='search products here...'/>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__elements">
          <AddShoppingCartOutlinedIcon fontSize="large" />

          <div className="header__option">
            <span className="header__optionLineOne header__cartCount">0</span>
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header