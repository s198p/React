import React from "react";
import { Link } from "react-router-dom";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-around"}}>
      <Link data-cy="navbar-home-link" to="/">login</Link>
      <span data-cy="navbar-cart-items-count">Cart</span>
      <button data-cy="navbar-login-logout-button">Logout</button>
    </div>
  );
};

export default Navbar;
