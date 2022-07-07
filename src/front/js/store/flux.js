const getState = ({
  getStore,
  getActions,
  setStore
}) => {
  return {
    store: {
      planets: [],
      characters: [],
    },
    actions: {
      // Use getActions to call a function within a fuction


      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((resp) => resp.json())
          .then((data) => setStore({
            planets: data.results
          }));
      },

      getCharacters: () => {
        fetch("https://swapi.dev/api/characters")
          .then((resp) => resp.json())
          .then((data) => setStore({
            characters: data.results
          }));
      },


    },
  };
};

export default getState;