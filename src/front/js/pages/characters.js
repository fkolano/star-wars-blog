import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { Card } from "../component/card";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="row">
        <div className="col-8 offset-2 d-flex flex-row flex-wrap"></div>
        {store.characters.map((characters) => {
          return <Card title={characters.name} />;
        })}
      </div>
    </div>
  );
};
