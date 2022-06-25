import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { Card } from "../component/card.js";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="row">
        <div className="col-9 offset-2 d-flex flex-row flex-wrap justify-content-center">
          {store.planets.map((planet) => {
            return <Card title={planet.name} />;
          })}
        </div>
      </div>
    </div>
  );
};
