import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import medicationsReducer from './reducers/medicationsReducer';
import medicationFormData from './reducers/medicationFormData';

const reducers = combineReducers({
	medications: medicationsReducer,
	medicationFormData
});
const middleware = [thunk];

export default createStore(
    	reducers, 
    	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(...middleware),    
);


