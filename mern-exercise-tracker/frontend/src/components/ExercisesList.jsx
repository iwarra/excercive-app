import useExercises from '../hooks/useExercises';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ExercisesList = () => {
  const { createExerciseList } = useExercises();
  const { theme } = useContext(ThemeContext);
  const tableLight = theme === "light";

  return (
    <div>
      <h1 className={tableLight ? "h3 mb-3 text-dark" : "h3 mb-3 text-light"}>Logged Exercises</h1>
      <table className={tableLight ? "table table-striped" : "table table-striped table-dark"}>
        <thead className={tableLight ? "thead-light" : "thead-dark"}>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { createExerciseList() }
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
