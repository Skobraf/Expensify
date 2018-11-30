import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div>
			<header>Expensify</header>
			<NavLink  to="/create">Go to create</NavLink>
		</div>
		</div>
		);
}

export default Header;