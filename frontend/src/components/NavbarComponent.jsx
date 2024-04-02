import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useRef } from 'react';

function NavbarComponent() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const navLight = theme === 'light';
	const navClasses = 'navbar navbar-expand-lg mb-3 px-2';
	const location = useLocation();
	const myRef = useRef(null);
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	function toggleNavbar() {
		setIsNavbarOpen(!isNavbarOpen);
		myRef.current.classList.toggle('show');
		console.log(myRef.current.classList);
	}

	return (
		<nav
			className={
				navLight ? navClasses + ' navbar-light bg-light' : navClasses + ' navbar-dark bg-dark'
			}>
			<div className='container-fluid pt-2 pb-2'>
				<Link
					to='/'
					className='navbar-brand'>
					{' '}
					Exercizer{' '}
				</Link>
				<button
					onClick={toggleNavbar}
					className='collapsed navbar-toggler nav-btn'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
					ref={myRef}>
					<ul className='navbar-nav me-auto'>
						<li className='nav-item'>
							<Link
								to='/'
								className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
								{' '}
								Exercises{' '}
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/create'
								className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}>
								{' '}
								Create Exercise Log{' '}
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/user'
								className={`nav-link ${location.pathname === '/user' ? 'active' : ''}`}>
								{' '}
								Create User{' '}
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/delete'
								className={`nav-link ${location.pathname === '/delete' ? 'active' : ''}`}>
								{' '}
								Delete a user{' '}
							</Link>
						</li>
					</ul>
					<button
						className='btn btn-secondary mt-2'
						onClick={toggleTheme}>
						{theme === 'light' ? 'Dark mode' : 'Light mode'}
					</button>
				</div>
			</div>
		</nav>
	);
}

export default NavbarComponent;
