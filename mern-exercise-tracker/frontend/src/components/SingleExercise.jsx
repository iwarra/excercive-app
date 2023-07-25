import { Link } from 'react-router-dom';

function SingleExercise({ exercise, deleteExercise }) {
  return (
  <tr>
    <td>{exercise.username}</td>
    <td>{exercise.description}</td>
    <td>{exercise.duration}</td>
    <td>{exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={`/edit/${exercise._id}`}>edit</Link> | { }
      <a  href="/" onClick={(e) => {
        e.preventDefault();
        deleteExercise(exercise._id);
      }}>
        delete
      </a>
    </td>
  </tr>
  )
}

export default SingleExercise;