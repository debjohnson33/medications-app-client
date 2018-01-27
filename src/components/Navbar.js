import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
	width: '100px',
	padding: '14px',
	margin: '6px',
	background: '#D46A6A',
	textDecoration: 'none',
	color: 'white',
}

const Navbar = () => 
	<div>
		<br />
		<NavLink
		to='/'
		exact
		style={link}
		>Home</NavLink>

		<NavLink
		to='/medications'
		exact
		style={link}
		>Medications</NavLink>
	</div>

export default Navbar;

