import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light bg-white">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Characters</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Favorites</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
