import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteCourse) => {},
  removeFavorite: (courseId) => {},
  itemIsFavorite: (courseId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteCourse) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteCourse);
    });
  }

  function removeFavoriteHandler(courseId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((course) => course.id !== courseId);
    });
  }

  function itemIsFavoriteHandler(courseId) {
    return userFavorites.some((course) => course.id === courseId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
