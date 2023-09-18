import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const API_BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000' // Local development URL
  : 'https://exerciser.onrender.com'; // Production URL

const useUser = () => {
  const { users, setUsers, exercises, setExercises, setExercise } = useContext(DataContext);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersResponse = await axios.get(`${API_BASE_URL}/users`);
        if (usersResponse.data.length > 0) {
          setUsers(usersResponse.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  const addNewUser = e => {
    setNewUser(e.target.value)
  } 
  
  const deleteUser = async (id) => {
    try {
      const filteredExercises = exercises.filter(exercise => exercise.userID === id)
      filteredExercises.forEach(exercise => axios.delete(`${API_BASE_URL}/exercises/${exercise._id}`)
      ) 
      setExercises(filteredExercises)

      const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
      console.log(response.data)
      setUsers(prevUsers => prevUsers.filter(user => user._id !== id))

      setExercise({
        userID:"",
        username:"",
        description: "",
        duration: 0,
        date: new Date()
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: newUser,
    };

    try {
      const userResponse = await axios.post(`${API_BASE_URL}/users/add`, user)
      console.log(userResponse.data)
      setNewUser('');
    } catch (error) {
      console.log(error)
    }
  }; 

  return { users, 
           newUser, 
           addNewUser, 
           deleteUser,
           handleSubmit 
         }
};

export default useUser;