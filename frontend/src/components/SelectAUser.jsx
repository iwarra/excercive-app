import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from '../context/DataContext';
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import useExercises from '../hooks/useExercises';

export const SelectAUser = () => {
  const { exercise, setSelectedID } = useContext(DataContext); 
  const { theme } = useContext(ThemeContext);
  const editLight = theme === "light";
  const { onChangeUsername, users } = useExercises();
  const initialUsername = "";

  const location = useLocation();
  const { pathname } = location;


  const handleDelete = (e) => {
    onChangeUsername(e)
    const selectedUser = users.find((user) => user.username === e.target.value)
    setSelectedID(selectedUser._id)
  }

  return (
          <div className="form-group">
          <label className={editLight ? "text-dark" : "text-light"}>Username:</label>
          <select
            required
            className="form-control my-2"
            value={exercise.username || initialUsername}
            onChange={(e) => (
              pathname === '/delete' ? handleDelete(e) : onChangeUsername(e))}
          >
             <option value="" disabled={true}>-- Pick a user --</option>
            {users.map((user) => (
              <option key={user._id} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        )
};


