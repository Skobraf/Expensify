import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//React routing goes here
const ExepnsifyDashboardPage = () => {
	return (
		<p>hello</p>
		);
}

const AddExpenePage = () => {
	return (
		<p>create page</p>
		)
}
const routes = (
	<BrowserRouter>
		<div>
			<Route path="/" component={ExepnsifyDashboardPage} exact={true} />
			<Route path="/create" component={AddExpenePage} />
		</div>
	</BrowserRouter>
	);
ReactDOM.render(routes, document.getElementById('app'));
