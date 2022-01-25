import { Route, Routes } from "react-router-dom";

import AllCoursesPage from "./pages/AllCourses";
import NewCoursePage from "./pages/NewCourse";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllCoursesPage />} />
        <Route path="/new-course" element={<NewCoursePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
