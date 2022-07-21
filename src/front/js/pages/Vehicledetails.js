import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const VehicleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [vehicle, setVehicle] = useState(store.vehicles[params.index]);

  return (
    //<div className="jumbotron">{store.characters[params.index].name}</div>;
    <div className="">
      <h1>{vehicle?.name}</h1>
      <div>{vehicle?.terrain}</div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back Home
        </span>
      </Link>
    </div>
  );
};

VehicleDetails.propTypes = {
  match: PropTypes.object,
};
