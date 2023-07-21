import './App.css';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import NavbarComponent from './components/NavbarComponent';

import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

function App() {
  return (
      <div className="container">
        <ThemeProvider>
          <NavbarComponent />
          <DataProvider>
            <Routes>
              <Route path="/" exact element={<ExercisesList/>}/>
              <Route path="/edit/:id" element={<EditExercise/>}/>
              <Route path="/create" element={<CreateExercise/>}/>
              <Route path="/user" element={<CreateUser/>}/>
            </Routes>
          </DataProvider>
        </ThemeProvider>
      </div>
  );
}

export default App;
