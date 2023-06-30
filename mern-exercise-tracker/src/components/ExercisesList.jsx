import useExercises from '../hooks/useExercises';

const ExercisesList = () => {
  const { createExerciseList } = useExercises();

  return (
    <div>
      <h1 className="h3 mb-3">Logged Exercises</h1>
      <table className="table">
        <thead className="table-secondary">
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
