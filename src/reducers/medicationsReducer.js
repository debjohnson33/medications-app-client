export function medicationsHasErrored(state = false, action) {
	switch (action.type) {
		case 'MEDICATIONS_HAS_ERRORED':
			return action.hasErrored;
		default:
			return state;
	}
}

export function medicationsIsLoading(state = false, action) {
	switch (action.type) {
		case 'MEDICATIONS_IS_LOADING':
			return action.isLoading;
		default:
			return state;
	}
}

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