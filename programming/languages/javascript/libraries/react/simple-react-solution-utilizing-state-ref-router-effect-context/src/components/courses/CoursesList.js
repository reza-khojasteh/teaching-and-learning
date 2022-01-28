import CourseItem from "./CourseItem";
import classes from "./CoursesList.module.css";

function CoursesList(props) {
  return (
    <ul className={classes.list}>
      {props.courses.map((course) => (
        <CourseItem
          key={course.id}
          id={course.id}
          image={course.image}
          title={course.title}
          author={course.author}
          description={course.description}
        />
      ))}
    </ul>
  );
}

export default CoursesList;
