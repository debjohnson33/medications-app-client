const initialState = {
	rating: 0,
	comment: '',
}
export default (state = initialState, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.reviewFormData
		case 'RESET_REVIEW_FORM':
			return initialState;
		default:
			return state;
	}
}