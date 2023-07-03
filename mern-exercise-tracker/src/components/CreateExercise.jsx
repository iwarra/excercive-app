import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useUser from '../hooks/useUser';
import useExercises from '../hooks/useExercises';

function CreateExercise() {
  const { users } = useUser();
  const { username, onChangeUsername, handleSubmit, description, duration, date, onChangeDate, onChangeDuration, onChangeDescription } = useExercises();

  return (
   <div>
      <h1 className="h3 mb-3">Create New Exercise Log</h1>
      <form onSubmit={ handleSubmit }>
        <div className="form-group"> 
          <label>Username: </label>
          <select 
              required
              className="form-control my-2"
              value={ username }
              onChange={ onChangeUsername }>
              {
               users.map(user => (
                   <option key={user} value={user}>
                      {user}
                    </option>
                  ))
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description:</label>
          <input  
              type="text"
              required
              className="form-control my-2"
              value={ description }
              onChange={ onChangeDescription }
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control my-2"
              value={ duration }
              onChange={ onChangeDuration }
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={ date }
              onChange={ onChangeDate }
            />
          </div>
        </div>
           <button type="submit" className="btn btn-primary mt-3">Create Exercise Log</button>
      </form>
    </div>
  );
}

export default CreateExercise;