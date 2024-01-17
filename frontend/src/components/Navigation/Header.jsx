import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { logout } from '../../store/session';


import './Header.css';

function Header() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <FontAwesomeIcon icon={faAmazon} size="2x" />
      </Link>

      <div className="searchBar">
        <input type="text" className="inputSearch" placeholder="Search" />
        <button className="searchButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="header-nav">
        {/* Account Section */}
        {!user ? (
          <div className="header-option" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="header-optionLineOne">Hello, Sign in</span>
            <span className="header-optionLineTwo">Account & Lists</span>
            {showDropdown && (
              <div className="header-dropdown">
                <NavLink to="/login" className="header-dropdown-btn">Sign In</NavLink>
                <NavLink to="/signup" className="header-dropdown-new">New customer? Start here.</NavLink>
              </div>
            )}
          </div>
        ) : (
          <div className="header-option" onClick={handleLogout}>
            <span className="header-optionLineOne">Hello, {user.name}</span>
            <span className="header-optionLineTwo">Sign Out</span>
          </div>
        )}

        {/* Prime Link */}


        {/* Cart Icon */}
        <Link to="/cart" className="header-cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="header-cartCount">0</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
