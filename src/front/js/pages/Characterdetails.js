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
      <div className="card mb-3 detailPic">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/2/2d/Luke.jpg?width=640"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{character?.name}</h5>
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
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center"></div>
        <h1>{character?.name}</h1>
        <div>{character?.terrain}</div>
        <div>Eye Color: {character?.eye_color}</div>
        <div>Height: {character?.height}</div>
        <div>Gender {character?.gender}</div>
        <div>Skin Color: {character?.skin_color}</div>
        <div>Mass: {character?.mass}kg</div>
        <div>Birth Year: {character?.birth_year}</div>

        {console.log(store.characters)}
        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back Home
          </span>
        </Link>
      </div>
    </div>
  );
};

CharacterDetails.propTypes = {
  match: PropTypes.object,
};
