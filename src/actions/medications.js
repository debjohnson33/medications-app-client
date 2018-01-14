import fetch from 'isomorphic-fetch';
import { resetMedicationForm } from './medicationForm';

const API_URL = process.env.REACT_APP_API_URL;

export const medicationsFetchDataSuccess = medications => {
	return {
		type: 'MEDICATIONS_FETCH_DATA_SUCCESS',
		medications
	}
}

export const addMedication = medication => {
	return {
		type: 'CREATE_MEDICATION_SUCCESS',
		medication
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

export const createMedication = (medication, history) => {
	return dispatch => {
		return fetch(`${API_URL}/medications`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ medication: medication })
		})
			.then(response => response.json())
			.then(medication => {
				dispatch(addMedication(medication))
				dispatch(resetMedicationForm())
				hisory.push('/medications')
			})
			.cath(error => console.log(error))
	}	
}