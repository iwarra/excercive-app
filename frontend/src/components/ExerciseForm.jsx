import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from '../context/DataContext';
import useExercises from '../hooks/useExercises';
import { SelectAUser } from './SelectAUser';

export const ExerciseForm = () => {
  const { exercise } = useContext(DataContext); 
  const { theme } = useContext(ThemeContext);
  const { onChangeDate, onChangeDuration, onChangeDescription, handleSubmit } = useExercises();
  const { id } = useParams();
  const editLight = theme === "light";

  return (
       <form onSubmit={(e) => handleSubmit(e, id)}>
        <SelectAUser></SelectAUser>
        <div className="form-group">
          <label className={editLight ? "text-dark" : "text-light"}>Description:</label>
          <input
            type="text"
            required
            className="form-control my-2"
            value={exercise.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label className={editLight ? "text-dark" : "text-light"}>Duration (in minutes):</label>
          <input
            type="text"
            className="form-control my-2"
            value={exercise.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label className={editLight ? "text-dark" : "text-light"}>Date:</label>
          <div>
            <DatePicker 
              selected={exercise.date}
              onChange={onChangeDate} 
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">{id ? 'Edit Exercise' : 'Create Exercise'}</button> 
      </form>
  );
};


