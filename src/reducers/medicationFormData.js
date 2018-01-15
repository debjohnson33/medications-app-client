export default (state = {
	name: '',
	generic_name: '',
	uses: '',
	side_effects: '',
	precautions: ''
}, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.medicationFormData
		default:
			return state;
	}
}