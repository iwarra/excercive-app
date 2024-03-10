import './App.scss';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

import { ErrorFallback } from './components/ErrorFallback';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import NavbarComponent from './components/NavbarComponent';
import DeleteUser from './components/DeleteUser';
import NotFound from './components/NotFound';

function App() {
	return (
		<div className='container-sm pb-5'>
			<ThemeProvider>
				<DataProvider>
					<NavbarComponent />
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<Routes>
							<Route
								path='/'
								exact
								element={<ExercisesList />}
							/>
							<Route
								path='/edit/:id'
								element={<EditExercise />}
							/>
							<Route
								path='/create'
								element={<CreateExercise />}
							/>
							<Route
								path='/user'
								element={<CreateUser />}
							/>
							<Route
								path='/delete'
								element={<DeleteUser />}
							/>
							<Route
								path='*'
								element={<NotFound />}
							/>
						</Routes>
					</ErrorBoundary>
				</DataProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
