import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from '../context/DataContext';
import useExercises from '../hooks/useExercises';
import { ExerciseForm } from './ExerciseForm';

const EditExercise = () => {
  const { setExercise } = useContext(DataContext); 
  const { theme } = useContext(ThemeContext);
  const { exercises } = useExercises();
  const [ currentExercise, setCurrentExercise ] = useState({
    userID:"",
    username:"",
    description: "",
    duration: 0,
    date: new Date()
  })
  const { id } = useParams();
  const editLight = theme === "light";

  //State reset if we exit the component without saving the changes
  useEffect(() => {
    return  () => { 
      setExercise({
        userID:"",
        username:"",
        description: "",
        duration: 0,
        date: new Date()
      })
    }
  }, [])

  const setExerciseOnLoad = () => {
    const editingExercise = exercises.find((exercise)  => exercise._id === id)
    if(!editingExercise) {
      console.log("No exercise found")
      return
    };
    
    setCurrentExercise({
      userID: editingExercise._id,
      username: editingExercise.username,
      description: editingExercise.description,
      duration: editingExercise.duration,
      date: (new Date(editingExercise.date))
    })
    
    setExercise(currentExercise)
  }

  useEffect(() => {
    setExerciseOnLoad()
  }, [id, exercises])

  
  return (
    <div>
      <h1 className={editLight ? "h3 mb-3 text-dark" : "h3 mb-3 text-light"}>Edit Exercise Log</h1>
      <ExerciseForm></ExerciseForm>
    </div>
  );
};

export default EditExercise;