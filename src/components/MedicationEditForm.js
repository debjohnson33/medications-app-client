import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateMedicationFormData } from '../actions/medicationForm';
import { fetchMedications, editMedication } from '../../actions/medications';
import FormError from './FormError';
import './Medication.css';

class MedicationEditForm extends Component {

	componentWillMount() {
		this.props.fetchMedications();
	}


	handleOnChange = event => {
		const { name, value } = event.target;
		const currentMedicationFormData = Object.assign({}, this.props.medicationFormData, {
			[name]: value
		})
		this.props.updateMedicationFormData(currentMedicationFormData)
	}

	render() {

		const { name, generic_name, uses, side_effects, precautions } = this.props.medicationFormData;

		<div>
			{this.props.errors === true ? <FormError /> : null}
			<h4>Add a Medication to the List</h4>
			<form onSubmit={this.handleOnSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input 
						type='text'
						onChange={this.handleOnChange}
						name='name' 
						value={name} 
					/>
				</div>
				<br />
				<div>
					<label htmlFor='generic_name'>Generic Name:</label>
					<input 
						type='text' 
						onChange={this.handleOnChange}
						name='generic_name'
						value={generic_name} 
					/>
				</div>
				<br />
				<div>
					<label htmlFor='uses'>Uses:</label><br />
					<textarea
						rows='4'
						columns='70' 
						onChange={this.handleOnChange}
						name='uses'
						value={uses} >
					</textarea>
				</div>
				<br />
				<div>
					<label htmlFor='side_effects'>Side Effects:</label><br/>
					<textarea
						rows='4'
						columns='70'
						onChange={this.handleOnChange} 
						name='side_effects'
						value={side_effects} >
					</textarea>
				</div>
				<br />
				<div>
					<label htmlFor='precautions'>Precautions:</label><br />
					<textarea
						rows='4'
						columns='70' 
						onChange={this.handleOnChange}
						name='precautions'
						value={precautions} >
					</textarea>
				</div>
				<button type="submit" className="med" >Update Medication</button>
			</form>
			</div>
	}
}

const mapStateToProps = state => {
	return {
		medications: state.medications,
		medicationFormData: state.medicationFormData,
		errors: state.errors
	}
}
 
export default connect(mapStateToProps, {
	updateMedicationFormData, 
	editMedication,
	fetchMedications
})(MedicationEditForm);