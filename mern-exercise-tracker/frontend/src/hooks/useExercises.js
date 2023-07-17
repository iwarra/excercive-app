import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SingleExercise from '../components/SingleExercise';

const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [username, setUsername] = useState('');
  const [ users, setUsers ] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/')
        .then(res => {
          console.log('Fetched exercises: ', res.data);
          setExercises(res.data);
        })
        .catch(error => console.log(error));

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
          setUsername(response.data[0].username);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/exercises/${id}`)
      .then(res => console.log(res.data));

    setExercises(prevExercises => prevExercises.filter(el => el._id !== id));
  };

  const createExerciseList = () => {
    return exercises.map(currentExercise => (
      <SingleExercise
        exercise={currentExercise}
        deleteExercise={deleteExercise}
        key={currentExercise._id}
      />
    ));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    };

    console.log('Created new exercise: ', exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))

    navigate('/');
  };

  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  const onChangeDuration = e => {
    setDuration(e.target.value);
  };

  const onChangeDate = date => {
    setDate(date);
  };

  const onChangeUsername = e => {
    const selectedUsername = e.target.value;
    if (selectedUsername === "") {
      const firstUsername = users[0];
      setUsername(firstUsername)
    } else {
      setUsername(e.target.value)
    }
  };

  return { 
          createExerciseList, 
          deleteExercise, 
          handleSubmit, 
          username,
          description, 
          duration, 
          date, 
          onChangeUsername,
          onChangeDate, 
          onChangeDuration, 
          onChangeDescription 
        };
};

export default useExercises;