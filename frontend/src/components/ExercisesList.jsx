import useExercises from '../hooks/useExercises';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const ExercisesList = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { createExerciseList } = useExercises();
	const { theme } = useContext(ThemeContext);
	const tableLight = theme === 'light';

	useEffect(() => {
		if (createExerciseList().length) {
			setIsLoading(false);
		}
	}, [setIsLoading, createExerciseList]);

	return (
		<div>
			<h1 className={tableLight ? 'h3 mb-3 text-dark' : 'h3 mb-3 text-light'}>Logged Exercises</h1>
			<div>
				{isLoading ? (
					<ThreeDots color='#0d6efd'></ThreeDots>
				) : (
					<table className={tableLight ? 'table table-striped' : 'table table-striped table-dark'}>
						<thead className={tableLight ? 'thead-light' : 'thead-dark'}>
							<tr>
								<th>User</th>
								<th>Workout</th>
								<th>Time</th>
								<th>Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>{createExerciseList()}</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default ExercisesList;
