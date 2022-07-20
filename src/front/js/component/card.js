import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      {" "}
      <h1>{props.title}</h1>
      <div className="cardRow d-flex my-5">
        {props.data.map((item, index) => {
          return (
            <div className="col mx-2" key={index}>
              <div
                className="card mb-3 text-light bg-dark"
                style={{
                  width: "18rem",
                }}
              >
                <img
                  src="https://placekitten.com/512"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title"> {item.name} </h5>{" "}
                  <p className="card-text"> "Planet info should be here" </p>{" "}
                  <div className="navbar">
                    <Link to={"/" + props.title.toLowerCase() + "/" + index}>
                      <button className="btn btn-primary">
                        {" "}
                        "Learn more"{" "}
                      </button>{" "}
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => props.addFavorites(item)}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export { Card };
