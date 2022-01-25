import { useNavigate } from "react-router-dom";

import NewCourseForm from "../components/courses/NewCourseForm";

function NewCoursePage() {
  const navigate = useNavigate();

  function addCourseHandler(courseData) {
    fetch(
      "https://react-st-rf-router-effect-ctx-default-rtdb.firebaseio.com/courses.json",
      {
        method: "POST",
        body: JSON.stringify(courseData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
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
