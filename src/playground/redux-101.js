import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
})

const resetCount = ({resetBy = 0} = {}) => ({
	type: 'RESET',
	resetBy

})

const store = createStore((state = {count: 0}, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: action.resetBy
			};
		default:
			return state;
	}
});


store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(resetCount());
store.dispatch(resetCount({resetBy: 100}))

