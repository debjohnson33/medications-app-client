export default (state = [], action) => {
	switch (action.type) {
		case 'MEDICATIONS_FETCH_DATA_SUCCESS':
			return action.medications;
		case 'ADD_MEDICATION_SUCCESS':
			return state.concat(action.medication)
		case 'DELETE_MEDICATION_SUCCESS':
			return state.filter(medication => medication.id !== +action.medicationId);
		case 'ADD_LIKE':
			let index = state.findIndex(medication => medication.id === action.id);
			let medication = state[index];
	
			return [
				...state.slice(0, index),
				Object.assign({}, medication, { likes: medication.likes += 1 }),
				...state.slice(index + 1)
			];
		default:
			return state;
	}
};