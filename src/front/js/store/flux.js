const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      favorites: [],
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
        fetch("https://swapi.dev/api/planets")
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              planets: data.results,
            })
          );
      },

      getCharacters: () => {
        fetch("https://swapi.dev/api/people")
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              characters: data.results,
            })
          );
      },
    },
  };
};

export default getState;
