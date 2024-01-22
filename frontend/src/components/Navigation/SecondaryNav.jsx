import React from 'react';
import './SecondaryNav.css';

const SecondaryNav = () => {
  return (
    <nav className="secondary-nav">
      <div className="nav-container">
        <ul>
          <li><a href="/category/1">Best Sellers</a></li>
          <li><a href="/category/2">Today's Deals</a></li>
          <li><a href="/category/3">New Releases</a></li>
          <li><a href="/category/4">Amazon Basics</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNav;
