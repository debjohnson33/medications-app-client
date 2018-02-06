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
			const newMedicationState = state.map(medication => {
				if (medication.id === action.medicationId) {
					return Object.assign({}, medication, {medication: medication})
				} else {
					return medication
				}
			})
			return newMedicationState;
		default:
			return state;
	}
};