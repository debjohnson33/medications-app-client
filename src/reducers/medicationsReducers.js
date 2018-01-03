export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_MEDICATIONS':
			return action.medications;
		case 'ADD_MEDICATION':
			return state.concat(action.medication)
		default:
			return state;
	}
};