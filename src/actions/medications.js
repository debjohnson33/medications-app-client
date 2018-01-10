import fetch from 'isomorphic-fetch';
const API_URL = process.env.REACT_APP_API_URL;

//const setMedications = medications => {
//	return {
//		type: 'FETCH_MEDICATIONS',
//		medications
//	};
//};

//export const fetchMedications = () => {
//	return dispatch => {
//		return fetch(`${API_URL}/medications`)
//			.then(response => response.json())
//			.then(medications => dispatch(setMedications(medications)))
//			.catch(error => console.log(error));
//	};
//};

export function fetchMedications() {
	const medications = [
		{id: 1, name: 'Zestril', generic_name: 'Lisinopril', uses: 'Lisinopril is used to treat high blood pressure', side_effects: 'dizziness, lightheadedness, tiredness, headaches', precautions: 'This drug may make you dizzy. Do not drive, use machinery, or do any activity that requires alertness until you are sure you can perform such activities safely'},
		{id: 2, name: 'Zyrtec', generic_name: 'Cetirizine', uses: 'Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching', side_effects: 'Drowsiness, tiredness, and dry mouth may occur. Stomach pain may also occur, especially in children', precautions: 'This drug may make you drowsy. Alcohol or marijuana can make you more drowsy. Do not drive, use machinery, or do anything that needs alertness until you can do it safely'}
	];
	return {
		type: 'FETCH_MEDICATIONS',
		medications
	};
}