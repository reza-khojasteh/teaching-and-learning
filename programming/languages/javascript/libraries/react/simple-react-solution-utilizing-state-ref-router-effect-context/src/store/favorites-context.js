import { createContext, useState } from "react";

const FavoritesContext = createContext({
  // We don't even need to fill this obj. with initial key/value pairs; when you create a context, you pass a default value in the first argument. The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

  // In other words, when there's no Provider, the defaultValue argument is used for function createContext. Again, helpful for testing components in isolation without wrapping them, or testing it with different values from Provider (an example of which can be found on: https://codesandbox.io/s/context-api-defaultvalue-s9ok5)

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
