import React from 'react';
import './SecondaryNav.css';
import { Link } from 'react-router-dom';

const SecondaryNav = () => {
  return (
    <nav className="secondary-nav">
      <div className="nav-container">
        <ul>
        <li><Link to="/brand/BMW">BMW</Link></li>
          <li><Link to="/brand/Ducati">Ducati</Link></li>
          <li><Link to="/brand/MV Agusta">MV Agusta</Link></li>
          <li><Link to="/brand/Yamaha">Yamaha</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNav;
