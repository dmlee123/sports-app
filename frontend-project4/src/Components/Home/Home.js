import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
	return (
		<div className='Home'>
			<motion.h1
				initial={{ y: -250 }}
				animate={{ y: 100, scale: 1.5 }}
				transition={{ duration: 2 }}>
				Sports Odds Calculator
			</motion.h1>
			<Link to='/Login'>
				<motion.p
					initial={{ y: -250 }}
					animate={{ y: 100, scale: 1.5 }}
					transition={{ duration: 2 }}
					whileHover={{ scale: 1.0, transition: { duration: 1 } }}>
					click here to continue
				</motion.p>
			</Link>
			<br /> <br /> <br /> <br /> <br />
			<motion.h1
				initial={{ y: -250, opacity: 1 }}
				animate={{
					y: 100,
					scale: 1.2,
					rotateZ: 180,
					rotateX: 180,
					opacity: 0.2,
				}}
				transition={{ duration: 2 }}>
				Sports Odds Calculator
			</motion.h1>
			<Link to='/Login'>
				<motion.p
					initial={{ y: -250, opacity: 1 }}
					animate={{
						y: 100,
						scale: 1.1,
						rotateZ: 180,
						rotateX: 180,
						opacity: 0.2,
					}}
					transition={{ duration: 2 }}>
					click here to continue
				</motion.p>
			</Link>
		</div>
	);
}

export default Home;
