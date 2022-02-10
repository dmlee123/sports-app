import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';

function App() {
	return (
		<div className='App'>
			<main>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/Login' element={<Login />} />
					<Route exact path='/Register' element={<Register />} />
					<Route exact path='/Dashboard' element={<Dashboard />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
