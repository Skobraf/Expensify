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
		description,
		note,
		amount,
		createdAt

	}
});

const removeExpense = ({id} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id

});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
				];
		case 'REMOVE_EXPENSE':
			return state.filter(({id}) => id != action.id);

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

store.subscribe(()=>{
	console.log(store.getState());
})

const expense1 = store.dispatch(addExpense({
	description: "Rent",
	amount: 100
}));

const expense2 = store.dispatch(addExpense({
	description: 'Coffee',
	amount: 200
}));

store.dispatch(removeExpense({id: expense1.expense.id}));

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