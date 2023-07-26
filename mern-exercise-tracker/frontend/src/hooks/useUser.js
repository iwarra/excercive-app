import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const useUser = () => {
  const { users, setUsers, setExercises, exercises, setExercise } = useContext(DataContext)
  const [newUser, setNewUser] = useState('');
  
  useEffect(() => {
    console.log(exercises)
  }, [])

  useEffect(() => {
  axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
        setUsers(response.data);
      }
    })
    .catch(error => console.log(error));
  }, []);

  const addNewUser = e => {
    setNewUser(e.target.value)
  } 
  
  const deleteUser = id => {
    const userToDelete = users.find(user => user._id === id)
    const username = userToDelete.username
     axios.delete(`http://localhost:5000/users/${id}`)
      .then(res => {
        console.log(res.data)
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id))

        //This part does not work
        setExercises(prevExercises => prevExercises.filter(el => el.username !== username));
      });

      setExercise({
        userID:"",
        username:"",
        description: "",
        duration: 0,
        date: new Date()
      })
  }

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: newUser,
    };
    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
         .then(res => console.log(res.data))
         .catch(error => console.log(error));

    setNewUser('');
  }; 

  return { users, 
           newUser, 
           addNewUser, 
           deleteUser,
           handleSubmit 
         }
};

export default useUser;