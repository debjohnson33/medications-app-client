export default (state = [], action) => {
	switch (action.type) {
		case 'MEDICATIONS_FETCH_DATA_SUCCESS':
			return action.medications;
		case 'ADD_MEDICATION_SUCCESS':
			return state.concat(action.medication)
		case 'DELETE_MEDICATION_SUCCESS':
			state.splice(action.medicationId, 1)
			return state;
		case 'UPDATE_MEDICATION_SUCCESS':
			return state.map(
				medication => 
					medication.id === action.medicationId 
						? Object.assign({}, ...medication, action.medication)
						: medication
			);
		default:
			return state;
	}
};