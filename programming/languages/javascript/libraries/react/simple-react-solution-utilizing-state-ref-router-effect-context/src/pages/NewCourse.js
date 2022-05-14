import { useNavigate } from "react-router-dom";

import NewCourseForm from "../components/courses/NewCourseForm";

function NewCoursePage() {
  const navigate = useNavigate();

  function addCourseHandler(courseData) {
    fetch(process.env.REACT_APP_FIREBASE_REALTIME_DATABASE, {
      method: "POST",
      body: JSON.stringify(courseData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Course</h1>
      <NewCourseForm onAddCourse={addCourseHandler} />
    </section>
  );
}

export default NewCoursePage;
