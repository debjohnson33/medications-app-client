const API_URL = process.env.REACT_APP_API_URL;

const setMedications = medications => {
	return {
		type: 'FETCH_MEDICATIONS',
		medications
	}
}

export const fetchMedications = () => {
	return dispatch => {
		return fetch(`${API_URL}/medications`)
			.then(response => response.json())
			.then(medications => dispatch(setMedications(medications)))
			.catch(error => console.log(error));
	}
}