import React from 'react';
import './SecondaryNav.css';

const SecondaryNav = () => {
  return (
    <nav className="secondary-nav">
      <div className="nav-container">
        <ul>
          <li><a href="/category/1">BMW</a></li>
          <li><a href="/category/2">Ducati</a></li>
          <li><a href="/category/3">MV Agusta</a></li>
          <li><a href="/category/4">Yamaha</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNav;
