export default (state = [], action) => {
	switch (action.type) {
		case 'MEDICATIONS_FETCH_DATA_SUCCESS':
			return action.medications;
		case 'ADD_MEDICATION':
			return state.concat(action.medication)
		default:
			return state;
	}
};