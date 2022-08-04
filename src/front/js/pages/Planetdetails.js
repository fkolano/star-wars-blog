import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const PlanetDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [planet, setPlanet] = useState(store.planets[params.index]);

  return (
    <div className="">
      <div className="card mb-3 detailPic">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg?width=640"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{planet?.name}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum dolor sit amet consectetur adipiscing elit ut aliquam
                purus. Volutpat est velit egestas dui id ornare arcu odio. Sit
                amet venenatis urna cursus eget nunc scelerisque viverra mauris.
                Elit scelerisque mauris pellentesque pulvinar. Eu facilisis sed
                odio morbi quis commodo odio aenean. Rutrum quisque non tellus
                orci ac auctor augue mauris. Diam quam nulla porttitor massa id
                neque aliquam.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-top border-danger">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
          <div class="col-md-auto">Terrain: {planet?.terrain}</div>
          <div class="col-md-auto">Climate: {planet?.climate}</div>
          <div class="col-md-auto">
            Orbital Period: {planet?.orbital_period}
          </div>
          <div class="col-md-auto">Diameter: {planet?.diameter}</div>
          <div class="col-md-auto">Population: {planet?.population}</div>
          <div class="col-md-auto">Gravity: {planet?.gravity}</div>
          <div class="col-md-auto">
            Rotation Period: {planet?.rotation_period}
          </div>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back Home
        </span>
      </Link>
    </div>
  );
};

PlanetDetails.propTypes = {
  match: PropTypes.object,
};
