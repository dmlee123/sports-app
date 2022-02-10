import { useState } from 'react';
// all firebase functions makes life easier
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router';
import './Register.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Register() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	let navigate = useNavigate();

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
			navigate('/Dashboard');
		} catch (error) {
			console.log(error.message);
			alert('Please try again');
		}
	};

	return (
		<div id='HomePage1'>
			<motion.div
				className='login1'
				initial={{ x: '100vw' }}
				animate={{ x: 0 }}
				transition={{ type: 'spring' }}>
				<h3>Register User</h3>
				<p>Email</p>
				<input
					size='40'
					placeholder='Enter Email'
					onChange={(event) => {
						setRegisterEmail(event.target.value);
					}}
				/>
				<p>Password</p>
				<input
					size='40'
					placeholder='Enter Password'
					type='password'
					onChange={(event) => {
						setRegisterPassword(event.target.value);
					}}
				/>{' '}
				<br />
				<button onClick={register}>Create</button>
				<Link to='/Login'>
					<p>Have an account? Login now</p>{' '}
				</Link>
			</motion.div>
		</div>
	);
}

export default Register;
