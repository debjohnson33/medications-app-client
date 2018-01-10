export default (state = {
	loading: false, medications: []
}, action) => {
	switch (action.type) {
		case 'LOADING_MEDICATIONS':
			return Object.assign({}, state, { loading: true })
		case 'FETCH_MEDICATIONS':
			return action.medications;
		case 'ADD_MEDICATION':
			return state.concat(action.medication)
		default:
			return state;
	}
};