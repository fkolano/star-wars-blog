import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      {" "}
      {store.planets.length > 0 && (
        <Card
          data={store.planets}
          title="Planets"
          addFavorites={actions.addFavorites}
        />
      )}{" "}
      {store.characters.length > 0 && (
        <Card
          data={store.characters}
          title="Characters"
          addFavorites={actions.addFavorites}
        />
      )}
      {store.vehicles.length > 0 && (
        <Card
          data={store.vehicles}
          title="Vehicles"
          addFavorites={actions.addFavorites}
        />
      )}
    </div>
  );
};
