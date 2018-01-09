import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import medicationsReducers from './reducers/medicationsReducers';

const reducers = combineReducers({
	medicationsReducers
});
const middleware = [thunk];

export default function configureStore() {
	return createStore(
    	reducers, 
    	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(...middleware),    
  	);
}

