import { combineReducers } from 'redux';
import medicationsReducer from './medicationsReducer';

export default combineReducers({
	medications: medicationsReducer
});