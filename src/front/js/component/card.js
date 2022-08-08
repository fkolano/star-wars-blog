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
                  height: "25rem",
                }}
              >
                <img
                  src={
                    props.title.toLowerCase() == "planets"
                      ? "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg?width=640"
                      : props.title.toLowerCase() == "characters"
                      ? "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/2/2d/Luke.jpg?width=640"
                      : props.title.toLowerCase() == "vehicles"
                      ? "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/2/24/TIE_Fighter_SWGTCG.jpg?width=640"
                      : ""
                  }
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title"> {item.name} </h5>{" "}
                  <div className="navbar mt-auto">
                    <Link to={"/" + props.title.toLowerCase() + "/" + index}>
                      <button className="btn btn-primary"> Learn more </button>{" "}
                    </Link>
                    <button
                      className="btn"
                      onClick={() =>
                        props.addFavorites({
                          name: item.name,
                          url: `/${props.title.toLowerCase()}/${index}`,
                        })
                      }
                    >
                      <i class="fa-solid fa-bookmark"></i>
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
