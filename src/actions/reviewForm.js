export const updateReviewFormData = reviewFormData => {
	return {
		type: 'UPDATED_DATA',
		reviewFormData
	}
}

export const resetReviewForm = () => {
	return {
		type: 'RESET_REVIEW_FORM'
	}
}