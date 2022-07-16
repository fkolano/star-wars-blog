import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light bg-white">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        <div className="ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {store.favorites.map((item, index) => {
                <li key={index}>
                  <Link to={item.link}>
                    <a class="dropdown-item" href={store.favorites.url}>
                      {store.favorites.name}
                      Action
                    </a>
                  </Link>
                </li>;
              })}
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
};
