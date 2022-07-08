import React from "react";

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
                    <a href="#" className="btn btn-primary">
                      {" "}
                      "Learn more"{" "}
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => props.addFavorites(item)}
                    >
                      <i className="fas fa-heart"></i>
                    </a>
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
