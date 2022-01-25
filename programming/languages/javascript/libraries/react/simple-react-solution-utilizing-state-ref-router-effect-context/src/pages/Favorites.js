import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import CoursesList from "../components/courses/CoursesList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You've got no favorites yet. Consider adding some....</p>;
  } else {
    content = <CoursesList courses={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
