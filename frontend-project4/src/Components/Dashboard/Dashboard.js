import './Dashboard.css';
import { auth } from '../../firebase/firebase-config';
import { useState } from 'react';
import { signOut } from '@firebase/auth';
import { onAuthStateChanged } from '@firebase/auth';
import { useNavigate } from 'react-router';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GameInfo from './GameInfo';

function Dashboard() {
	const [user, setUser] = useState({});
	const [nflOdds, setNFLOdds] = useState();
	const [nbaOdds, setNBAOdds] = useState();

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	let navigate = useNavigate();

	const logout = async () => {
		await signOut(auth);
		navigate('/Login');
	};

	const getNflGames = () => {
		fetch(
			'https://odds.p.rapidapi.com/v1/odds?sport=americanfootball_nfl&region=us&dateFormat=iso&oddsFormat=american',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'odds.p.rapidapi.com',
					'x-rapidapi-key':
						'a213037575msh37e0b6269d89facp1c0113jsn73c2e9fb8f03',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setNBAOdds(null);
				setNFLOdds(data);
			});
	};

	const getNBAGames = () => {
		fetch(
			'https://odds.p.rapidapi.com/v1/odds?sport=basketball_nba&region=us&dateFormat=iso&oddsFormat=american',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'odds.p.rapidapi.com',
					'x-rapidapi-key':
						'a213037575msh37e0b6269d89facp1c0113jsn73c2e9fb8f03',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setNFLOdds(null);
				setNBAOdds(data);
			});
	};

	let nflGames = '';
	if (nflOdds) {
		nflGames = nflOdds?.data?.map((games) => {
			console.log(games);
			return <GameInfo games={games} />;
		});
	}

	let nbaGames = '';
	if (nbaOdds) {
		nbaGames = nbaOdds?.data?.map((games) => {
			return <GameInfo games={games} />;
		});
	}

	const date = new Date();
	const daylist = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday ',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const literalDay = daylist[date.getDay()];
	const monthList = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const literalMonth = monthList[date.getMonth()];

	const todaysDate =
		literalDay + ' ' + literalMonth + ' ' + date.getDay() + ', ' + date.getFullYear();


	return (
		<div className='Dashboard'>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<button id="nflGames" onClick={getNflGames}>NFL Games</button> &nbsp;&nbsp;
						<button id = "nbaGames" onClick={getNBAGames}>NBA Games</button> &nbsp;&nbsp;
						<Typography
							fontSize='50'
							textAlign='right'
							sx={{ flexGrow: 1, fontFamily: 'Open Sans' }}>
							
						</Typography>
						<span>{todaysDate}</span> &nbsp;
						<button id="logout" onClick={logout}> Logout</button>
					</Toolbar>
				</AppBar>
			</Box>
			{nflGames}
			{nbaGames}
		</div>
	);
}

export default Dashboard;
