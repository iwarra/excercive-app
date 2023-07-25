import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SingleExercise from '../components/SingleExercise';
import { DataContext } from '../context/DataContext';

const useExercises = () => {
  const { setUser, setUsers, exercise, setExercise, exercises, setExercises } = useContext(DataContext); 
  
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
             console.log('Fetched users: ', response.data)
             setUsers(response.data);
           }
         })
         .catch(error => console.log(error));
    }, []);

  const deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/exercises/${id}`)
      .then(res => {
        console.log(res.data)
        setExercises(prevExercises => prevExercises.filter(el => el._id !== id));
      });
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

  const handleSubmit = (e, id) => {
    e.preventDefault();

    const exerciseObj = {
      userID: exercise.userID,
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
    };

    //Creating new or editing an existing exercise
    if (id) {
       axios.post(`http://localhost:5000/exercises/update/${id}`, exerciseObj)
         .then((res) => console.log(res.data))
         .catch((error) => console.log(error));
    } else {
      axios.post('http://localhost:5000/exercises/add', exerciseObj)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
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
    setExercise(prevExercise => ({ 
      ...prevExercise,
      username: e.target.value
    }));

    // const currentUser = users.find((user) => user.username === selectedUsername)
    

    // setUser({
    //   userID: currentUser._id,
    //   username: selectedUsername
    // })

    // console.log(currentUser, user)
  };

  return { 
          createExerciseList, 
          deleteExercise, 
          handleSubmit, 
          exercises, 
          onChangeUsername,
          onChangeDate, 
          onChangeDuration, 
          onChangeDescription,
        };
};

export default useExercises;