import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SingleExercise from '../components/SingleExercise';
import { DataContext } from '../context/DataContext';

const useExercises = () => {
  const { setUser, users, setUsers, exercise, setExercise, exercises, setExercises } = useContext(DataContext); 
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exercisesResponse = await axios.get('http://localhost:5000/exercises/');
        console.log('Fetched exercises: ', exercisesResponse.data);
        setExercises(exercisesResponse.data);

        const usersResponse = await axios.get('http://localhost:5000/users/');
        if (usersResponse.data.length > 0) {
          console.log('Fetched users: ', usersResponse.data)
          setUsers(usersResponse.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteExercise = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/exercises/${id}`)
      console.log(response.data)

      setExercises(prevExercises => prevExercises.filter(el => el._id !== id));
    } catch (error) {
      console.log(error)
    }
  }

  const createExerciseList = () => {
    return exercises.map(currentExercise => (
      <SingleExercise
        exercise={currentExercise}
        deleteExercise={deleteExercise}
        key={currentExercise._id}
      />
    ));
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();

    const exerciseObj = {
      userID: exercise.userID,
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
    };

    try {
      if (id) {
        await axios.post(`http://localhost:5000/exercises/update/${id}`, exerciseObj);
      } else {
        await axios.post('http://localhost:5000/exercises/add', exerciseObj);
      }

      //Reset after posting
      setExercise({
        userID: "",
        username:"",
        description: "",
        duration: 0,
        date: new Date()
      })
      setUser({
        username: "",
        userID: ""
      })
    
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeDescription = e => {
    setExercise(prevExercise => ({ 
      ...prevExercise,
      description: e.target.value
    }));
  };

  const onChangeDuration = e => {
     setExercise(prevExercise => ({ 
      ...prevExercise,
      duration: e.target.value
    }));
  };

  const onChangeDate = date => {
     setExercise(prevExercise => ({ 
      ...prevExercise,
      date: date
    }));
  };

  const onChangeUsername = e => {
    const username = e.target.value;
    const user = users.find(user => user.username === username)

    setExercise(prevExercise => ({ 
      ...prevExercise,
      username: e.target.value,
      userID: user._id,
    }));
  };

  return { 
          createExerciseList, 
          deleteExercise, 
          handleSubmit, 
          exercises,
          users, 
          onChangeUsername,
          onChangeDate, 
          onChangeDuration, 
          onChangeDescription,
        };
};

export default useExercises;