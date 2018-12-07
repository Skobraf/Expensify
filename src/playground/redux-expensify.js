import { createStore, combineReducers } from 'redux';

const demoState = {
	expenses: [{
		id: 'hfrau',
		description: 'january rent',
		note: 'this is the final payment',
		amount: 545422,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};