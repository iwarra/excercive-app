import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { DataContext } from '../context/DataContext';
import useExercises from '../hooks/useExercises';

export const SelectAUser = () => {
  const { users, exercise } = useContext(DataContext); 
  const { theme } = useContext(ThemeContext);
  const editLight = theme === "light";
  const { onChangeUsername } = useExercises();
  const initialUsername = "";

  return (<div className="form-group">
          <label className={editLight ? "text-dark" : "text-light"}>Username:</label>
          <select
            required
            className="form-control my-2"
            value={exercise.username || initialUsername}
            onChange={onChangeUsername}
          >
             <option value="" disabled={true}>-- Pick a user --</option>
            {users.map((user) => (
              <option key={user._id} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>)
};


