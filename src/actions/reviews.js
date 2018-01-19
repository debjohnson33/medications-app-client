import { resetReviewForm } from './reviewForm';

const API_URL = process.env.REACT_APP_API_URL;

const addReview = review => {
	return {
		type: 'CREATE_REVIEW_SUCCESS',
		review
	}
}

export const createReview = (review, medication_id) => {
	return dispatch => {
		return fetch(`${API_URL}/medications/${medication_id}/reviews`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ review: review })
		})
		.then(handleErrors)
		.then(response => response.json())
		.then(review => {
			dispatch(addReview(review))
			dispatch(resetReviewForm())
		})
		.catch(error => 
			dispatch({type: 'error'})
	}
}

function handleErrors(response) {
	if(!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}