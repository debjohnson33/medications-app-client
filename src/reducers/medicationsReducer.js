export default (state = {loading: false, medications: []}, action) => {
	switch (action.type) {
		case 'MEDICATIONS_FETCH_DATA_SUCCESS':
			return Object.assign({}, state, {loading: false, medications: state.medications.concat(action.listings)});
		
		case 'LOADING':
			return Object.assign({}, state, {loading: true}); 
		case 'ADD_MEDICATION':
			return state.concat(action.medication)
		default:
			return state;
	}
};