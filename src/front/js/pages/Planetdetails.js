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
      <h1>{planet?.name}</h1>
      <div>Terrain: {planet?.terrain}</div>
      <div>Climate: {planet?.climate}</div>
      <div>Orbital Period: {planet?.orbital_period}</div>
      <div>Diameter: {planet?.diameter}</div>
      <div>Population: {planet?.population}</div>
      <div>Gravity: {planet?.gravity}</div>
      <div>Rotation Period: {planet?.rotation_period}</div>
      {console.log(store.planets)}

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
