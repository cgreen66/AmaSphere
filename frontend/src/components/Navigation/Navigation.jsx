import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="nav-dropdown">
        <button className="dropdown-btn">Hello, sign in</button>
        <div className="dropdown-content">
          <NavLink to="/signup">Create Account</NavLink>
          <NavLink to="/login">Sign In</NavLink>
        </div>
      </div>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">Your Logo</NavLink>
        <div className="nav-search">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="nav-account">
          {sessionLinks}
          <NavLink to="/cart" className="cart-button">
            <i className="fas fa-shopping-cart"></i> Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;