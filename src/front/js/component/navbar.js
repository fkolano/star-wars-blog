import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-dark bg-black p-0">
      <div className="container w-100">
        <Link to="/">
          <img
            width="100px"
            height="auto"
            src="https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png"
            alt="star wars"
          />
        </Link>
        <div className="ml-auto">
          <div className="nav-item dropdown">
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
            <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
              {store.favorites?.map((item, index) => {
                return (
                  <li className="d-flex" key={index}>
                    <Link to={item.url}>
                      <a className="dropdown-item text-white" href="">
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
          </div>
        </div>
      </div>
    </nav>
  );
};
