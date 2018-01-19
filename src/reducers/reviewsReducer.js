export default (state = [], action) => {
	switch (action.type) {
		case 'CREATE_REVIEW_SUCCESS':
			return state.concat(action.review)
		
		default:
			return state;
	}
};