import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import amazonLogo from '/Users/christopher/AmaSphere/amazonlogo.png'

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
            {/* Logo leading to home */}
            <NavLink to="/" className="nav-logo">
                <img src={amazonLogo} alt="Amazon" />
            </NavLink>
            {/* Search bar */}
            <div className="nav-search">
                <input type="text" placeholder="Search" className="search-input" />
                <button className="search-button">🔍</button> 
            </div>

           
<div className="nav-account">
                
                {sessionUser ? (
                    <ProfileButton user={sessionUser} />
                ) : (
                    <div className="nav-dropdown">
                        <button className="dropdown-btn">Hello, Sign in</button>
                        <div className="dropdown-content">
                            <NavLink to="/login" className="dropdown-link">Sign In</NavLink>
                            <NavLink to="/signup" className="dropdown-link">New customer? Start here.</NavLink>
                        </div>
                    </div>
                )}
                <NavLink to="/cart" className="cart-button">
            
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                </NavLink>
            </div>
        </div>
    </nav>
);
}
export default Navigation;

