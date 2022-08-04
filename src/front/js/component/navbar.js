import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light bg-white">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
          <img
            src="https://icon-library.com/icon/star-wars-logo-icon-9.html.html"
            alt="star wars"
          />
        </Link>
        <div className="ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {store.favorites?.map((item, index) => {
                return (
                  <li className="d-flex" key={index}>
                    <Link to={item.url}>
                      <a className="dropdown-item" href="">
                        {item.name}
                      </a>
                    </Link>

                    <i
                      onClick={() => {
                        actions.deleteFavorites(index);
                      }}
                      className="fa-solid fa-trash-can"
                    ></i>
                  </li>
                );
              })}
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
};
