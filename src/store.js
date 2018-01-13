import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import medicationsReducer from './reducers/medicationsReducer';

const reducers = combineReducers({
	medications: medicationsReducer
});
const middleware = [thunk];

export default createStore(
    	reducers, 
    	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(...middleware),    
);


