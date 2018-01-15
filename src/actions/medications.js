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
		type: 'ADD_MEDICATION_SUCCESS',
		medication: medication
	}
}

export const updateMedication = medicationFormData => {
	return {
		type: 'UPDATE_MEDICATION_SUCCESS',
		medicationFormData
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

export const createMedication = (medication) => {
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
				//history.push('/medications')
			})
			.catch(error => console.log(error))
	}	
}

export const editMedication = (medicationId, medication) => {
	return dispatch => {
		return fetch(`${API_URL}/medications/${medicationId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ medication: medication })
		})
			.then(response => response.json())
			.then(medication => {
				dispatch(updateMedication(medication))
			})
			.catch(error => console.log(error))
	}
}