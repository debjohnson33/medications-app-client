import fetch from 'isomorphic-fetch';
const API_URL = process.env.REACT_APP_API_URL;

export function medicationsFetchDataSuccess(medications) {
	return {
		type: 'MEDICATIONS_FETCH_DATA_SUCCESS',
		medications
	}
}

export const fetchMedications = () => {
	return dispatch => {
		return fetch(`${API_URL}/medications`)
			.then(response => response.json())
			.then(medications => {
				dispatch(medicationsFetchDataSuccess(medications));
			})
			.catch(error => console.log(error));
	};
};
