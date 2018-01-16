import { resetReviewForm } from './reviewForm';

const API_URL = process.env.REACT_APP_API_URL;

const addReview = review => {
	return {
		type: 'CREATE_REVIEW_SUCCESS',
		review
	}
}

export const createReview = (review, reviewId) => {
	return dispatch => {
		return fetch(`${API_URL}/reviews`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ review: review })
		})
		.then(response => response.json())
		.then(review => {
			dispatch(addReview(review))
			dispatch(resetReviewForm())
		})
		.catch(error => console.log(error))
	}
}