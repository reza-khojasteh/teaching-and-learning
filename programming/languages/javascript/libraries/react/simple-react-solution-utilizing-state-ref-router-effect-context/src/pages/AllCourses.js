import { useState, useEffect } from "react";

import CoursesList from "../components/courses/CoursesList";

function AllCoursesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCourses, setLoadedCourses] = useState([]);

  useEffect(() => {
    setIsLoading(true); // Although seems not to be needed!
    fetch(
      "https://react-st-rf-router-effect-ctx-default-rtdb.firebaseio.com/courses.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const courses = [];

        for (const key in data) {
          const course = {
            id: key,
            ...data[key],
          };

          courses.push(course);
        }

        setIsLoading(false);
        setLoadedCourses(courses);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Courses</h1>
      <CoursesList courses={loadedCourses} />
    </section>
  );
}

export default AllCoursesPage;
