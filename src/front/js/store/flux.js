const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      favorites: [],
      vehicles: [],
    },
    actions: {
      addFavorites: (data) => {
        const store = getStore();
        store.favorites.push(data);
        setStore(store);
      },

      deleteFavorites: (index) => {
        const store = getStore();
        const newArray = store.favorites.filter((item, i) => i != index);
        setStore({
          favorites: newArray,
        });
      },

      // Use getActions to call a function within a fuction

      getPlanets: () => {
        const store = getStore();
        fetch("https://swapi.tech/api/planets")
          .then((resp) => resp.json())
          .then((data) => {
            for (let x of data.results) {
              fetch(x.url)
                .then((resp) => resp.json())
                .then((data) => {
                  let newObject = data.result.properties;
                  newObject["description"] = data.result.description;

                  store.planets.push(newObject);
                  setStore(store);
                });
            }
          });
      },

      getCharacters: () => {
        fetch("https://swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              characters: data.results,
            })
          );
      },

      getVehicles: () => {
        fetch("https://swapi.tech/api/vehicles")
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              vehicles: data.results,
            })
          );
      },
    },
  };
};

export default getState;
