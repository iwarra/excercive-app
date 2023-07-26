import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    userID: ""
  })
  const [exercise, setExercise] = useState({
    userID: "",
    username:"",
    description: "",
    duration: 0,
    date: new Date()
  })
  const [users, setUsers] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [ selectedID, setSelectedID ] = useState(null);

   return (
    <DataContext.Provider value={{ 
      user, setUser,
      exercise, setExercise,
      users, setUsers, 
      exercises, setExercises, 
      selectedID, setSelectedID
     }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };