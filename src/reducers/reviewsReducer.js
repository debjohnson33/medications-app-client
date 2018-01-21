const initialState = {
	medication_id: '',
	rating: '',
	comment: ''
}
export default (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_REVIEW_SUCCESS':
			return state.concat(action.review)
		
		default:
			return state;
	}
};