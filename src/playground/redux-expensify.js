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

const editExpense = (id,updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})

const removeExpense = ({id} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id

});

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text

});

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',

});

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
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
		case 'EDIT_EXPENSE':
			state.map((expense) => {
				if(expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				}else {
					return expense;
				}
			});

		default:
			return state;
	}
};

const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined

}
const filtersReducer = (state = filterReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
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
store.dispatch(editExpense(expense2.expense.id, {amount: 500}));

store.dispatch(setTextFilter("rent"));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

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