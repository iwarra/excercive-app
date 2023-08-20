import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from '../context/DataContext';
import { ExerciseForm } from './ExerciseForm';

function CreateExercise() {
  const { setExercise } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);
  const createLight = theme === "light";
 
  //State reset if we exit the component without saving the changes
  useEffect(() => {
    return  () => { 
      setExercise({
        userID: "",
        username: "",
        description: "",
        duration: 0,
        date: new Date()
      })
    }
  }, [])

  return (
   <div>
      <h1 className={createLight ? "h3 mb-3 text-dark" : "h3 mb-3 text-light"}>Create New Exercise Log</h1>
      <ExerciseForm></ExerciseForm>
    </div>
  );
}

export default CreateExercise;