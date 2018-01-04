import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
	width: '100px',
	padding: '12px',
	margin: '0 6px 6 px',
	background: 'blue',
	textDecoration: 'none',
	color: 'white',
}

const Navbar = () => 
	<div>
		<NavLink
		to='/'
		exact
		style={link}
		>Home</NavLink>

		<NavLink
		to='/medications'
		exact
		style={link}
		>Teams</NavLink>
	</div>

export default Navbar;

