import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import medicationsReducer, { medicationsHasErrored, medicationsIsLoading } from './reducers/medicationsReducer';

const reducers = combineReducers({
	medications: medicationsReducer,
	medicationsHasErrored: medicationsHasErrored,
	medicationsIsLoading: medicationsIsLoading
});
const middleware = [thunk];

export default function configureStore() {
	return createStore(
    	reducers, 
    	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(...middleware),    
  	);
}

