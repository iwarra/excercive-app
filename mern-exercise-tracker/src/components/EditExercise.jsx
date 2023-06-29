import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditExercise = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:5000/exercises/${id}`)
        .then((response) => {
          const { username, description, duration, date } = response.data;
          setUsername(username);
          setDescription(description);
          setDuration(duration);
          setDate(new Date(date));
        })
        .catch((error) => console.log(error));

    axios.get('http://localhost:5000/users/')
          .then((response) => {
            if (response.data.length > 0) {
              const usernames = response.data.map((user) => user.username);
              setUsers(usernames);
            }
          })
          .catch((error) => console.log(error));
      }, [id]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    console.log(exercise);

    axios.post(`http://localhost:5000/exercises/update/${id}`, exercise)
         .then((res) => {
          console.log(res.data)
          navigate('/')
        })
         .catch((error) => console.log(error));
 
  };

  return (
    <div>
      <h1 className="h3">Edit Exercise Log</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <select
            required
            className="form-control my-2"
            value={username}
            onChange={handleUsernameChange}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            required
            className="form-control my-2"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes):</label>
          <input
            type="text"
            className="form-control my-2"
            value={duration}
            onChange={handleDurationChange}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <div>
            <DatePicker selected={date} onChange={handleDateChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Edit Exercise Log</button> 
      </form>
    </div>
  );
};

export default EditExercise;