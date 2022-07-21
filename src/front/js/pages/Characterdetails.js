import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const CharacterDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [character, setCharacter] = useState(store.characters[params.index]);

  return (
    //<div className="jumbotron">{store.characters[params.index].name}</div>;
    <div className="">
      <h1>{character?.name}</h1>
      <div>{character?.terrain}</div>
      <img src={"https://www.swapi.tech/api/people/1"} />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back Home
        </span>
      </Link>
    </div>
  );
};

CharacterDetails.propTypes = {
  match: PropTypes.object,
};
