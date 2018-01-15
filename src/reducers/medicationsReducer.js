export default (state = [], action) => {
	switch (action.type) {
		case 'MEDICATIONS_FETCH_DATA_SUCCESS':
			return action.medications;
		case 'ADD_MEDICATION_SUCCESS':
			return state.concat(action.medication)
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