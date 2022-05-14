import { useState, useEffect } from "react";

import CoursesList from "../components/courses/CoursesList";

function AllCoursesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCourses, setLoadedCourses] = useState([]);

  useEffect(() => {
    setIsLoading(true); // Although seems not to be needed!
    fetch(
      //Add your firebase real time database link as the value of the 'REACT_APP_FIREBASE_REALTIME_DATABASE' in a '.dtenv' file (in the root of the project)
      process.env.REACT_APP_FIREBASE_REALTIME_DATABASE
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
