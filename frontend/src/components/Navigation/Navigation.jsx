import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; 

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <NavLink to="/" className="nav-link">Home</NavLink>
      {/* Add additional NavLink components for other navigation items */}
      <NavLink to="/category1" className="nav-link">Category 1</NavLink>
      <NavLink to="/category2" className="nav-link">Category 2</NavLink>
      
      {/* Right side - Profile or SignIn/SignUp */}
      <div className="nav-account">
        {sessionUser ? (
          <NavLink to="/profile" className="nav-link">Profile</NavLink> 
        ) : (
          <>
            <NavLink to="/login" className="nav-link">Sign In</NavLink>
            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
