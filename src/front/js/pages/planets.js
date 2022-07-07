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
      <div className="row dataRow">
        {store.planets((planet) => {
          return <Card title={planet.name} />;
        })}
      </div>
    </div>
  );
};
