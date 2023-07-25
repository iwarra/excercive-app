import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const useUser = () => {
  const { users, setUsers } = useContext(DataContext)
  const [newUser, setNewUser] = useState('');

  const addNewUser = e => {
    setNewUser(e.target.value)
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

  useEffect(() => {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data);
        }
      })
      .catch(error => console.log(error));
  }, []);
  

  return { users, 
           newUser, 
           addNewUser, 
           handleSubmit 
         }
};

export default useUser;