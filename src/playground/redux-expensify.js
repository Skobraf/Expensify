import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD EXPENSE

const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
		} = {}
	) => ({
	type: 'ADD_EXPENSE',
	expense:{
		id: uuid(),

	}
})

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

const filtersReducer = (state = {}, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
}));

console.log(store.getState());

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