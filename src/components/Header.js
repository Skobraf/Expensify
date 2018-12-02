import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div>
			<header>Expensify</header>
			<NavLink  to="/create">Go to create</NavLink>
			<NavLink  to="/edit">Edit</NavLink>
			<NavLink  to="/">Dashboard</NavLink>
		</div>
		</div>
		);
}

export default Header;