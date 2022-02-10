import { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './Login.css';
import { motion } from 'framer-motion';

function HomePage() {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	let navigate = useNavigate();
	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				// auth variable has the information about the person logged in
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
			navigate('/Dashboard');
		} catch (error) {
			console.log(error.message);
			alert('Incorrect Email/Password.  Please try again.');
		}
	};

	return (
		<motion.div
			id='HomePage'
			initial={{ x: '-100vw' }}
			animate={{ x: 0 }}
			transition={{ type: 'spring' }}>
			<motion.div
				className='login'
				initial={{ x: '-100vw' }}
				animate={{ x: 0 }}>
				<h1>Login</h1>
				<p>Email</p>
				<input
					size='40'
					placeholder=' Enter Email'
					type='text'
					auto
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<p>Password</p>
				<input
					size='40'
					placeholder='Enter Password'
					type='password'
					onChange={(event) => {
						setLoginPassword(event.target.value);
					}}
				/>{' '}
				<br />
				<button onClick={login}>Login</button>
				<p>
					<Link to='/Register'> Don't have an account? Register now</Link>
				</p>
				<p>
					<Link to ="/dashboard">Login as guest</Link>
				</p>
			</motion.div>
		</motion.div>
	);
}

export default HomePage;
