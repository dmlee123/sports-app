import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { useState } from 'react';
// import Modal from '../Modal/Modal';


function GameInfo({ games }) {
	const [homeValue, setHomeValue] = useState();
	const [awayValue, setAwayValue] = useState();

	// const [openModal, setOpenModal] = useState(false)

	const homeOdds = (odds) => {
		console.log(homeValue);
		console.log(odds);
		if (odds >= 0) {
			let calculate = Math.abs((homeValue * odds) / 100);
			let rounded = Math.round(calculate * 100) / 100;
			if (rounded <= 0) {
				alert('Please enter a number greater than 0');
			} else {
				alert(`You would win $${rounded}`);
			}
		} else {
			let calculate = Math.abs((homeValue * 100) / odds);
			let rounded = Math.round(calculate * 100) / 100;
			if (rounded <= 0) {
				alert('Please enter a number greater than 0');
			} else {
				alert(`You would win $${rounded}`);
			}
		}

		// setOpenModal(true)
	};

	let awayOdds = (odds) => {
		console.log(awayValue);
		console.log(odds);
		if (odds <= 0) {
			let calculate = Math.abs((awayValue * 100) / odds);
			let rounded = Math.round(calculate * 100) / 100;
			if (rounded <= 0) {
				alert('Please enter a number greater than 0');
			} else {
				alert(`You would win $${rounded}`);
			}
		} else {
			let calculate = Math.abs((awayValue * odds) / 100);
			let rounded = Math.round(calculate * 100) / 100;
			if (rounded <= 0) {
				alert('Please enter a number greater than 0');
			} else {
				alert(`You would win $${rounded}`);
			}
		}
		// setOpenModal(true);
	};

	return (
		<>
			<Card id='Card' sx={{ minWidth: 275, border: 'solid' }}>
				<CardContent>
					<Typography sx={{ fontSize: 25 }} color='red' gutterBottom>
						Home Team: <strong id='strong'>{games.teams[0]} </strong>
						<br /> Odds:&nbsp;
						<strong id='strong'>{games.sites[0].odds.h2h[0]} </strong>
					</Typography>
					<h3>Bet Amount for {games.teams[0]}</h3>
					<input
						type='number'
						name='betAmount'
						min='0'
						onChange={(event) => {
							setHomeValue(event.target.value);
						}}></input>
					&nbsp; <br />
					<br />
					<button
						className='modal'
						onClick={() => homeOdds(games.sites[0].odds.h2h[0])}>
						Submit{' '}
					</button>{' '}
					&nbsp;
					<br />
					<br />
					<Typography sx={{ fontSize: 25 }} color='#424FC0' gutterBottom>
						Away Team: <strong id='strong'>{games.teams[1]} </strong> <br />{' '}
						Odds: <strong id='strong'> {games.sites[0].odds.h2h[1]}</strong>
					</Typography>
					<h3>Bet Amount for {games.teams[1]}</h3>
					<input
						type='number'
						name='betAmount'
						min='0'
						onChange={(event) => {
							setAwayValue(event.target.value);
						}}></input>
					&nbsp; <br /> <br />
					<button onClick={() => awayOdds(games.sites[0].odds.h2h[1])}>
						Submit
					</button>{' '}
					&nbsp;
				</CardContent>
			</Card>
			{/*conditonal rendering - if openModal= true, render the component */}
			{/* {openModal && <Modal closeModal = {setOpenModal} awayOdds={awayOdds}/>} */}
		</>
	);
}

export default GameInfo;
