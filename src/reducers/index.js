import { combineReducers } from 'redux'
import CounterReducer from './../ducks/counter';

export default combineReducers({
	counter: CounterReducer
})