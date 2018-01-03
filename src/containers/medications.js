const API_URL = process.env.REACT_APP_API_URL;

const setMedications = medications => {
	return {
		type: 'FETCH_MEDICATIONS',
		medications
	}
}