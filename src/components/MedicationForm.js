import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMedicationFormData } from '../actions/medicationForm';
import { createMedication } from '../actions/medications';

class MedicationForm extends Component {

	handleOnChange = event => {
		const { name, value } = event.target;
		const currentMedicationFormData = Object.assign({}, this.props.medicationFormData, {
			[name]: value
		})
		this.props.updateMedicationFormData(currentMedicationFormData)
	}

	handleOnSubmit = event => {
		event.preventDefault();
		this.props.createMedication(this.props.medicationFormData);
	}

	render() {

		const { name, generic_name, uses, side_effects, precautions } = this.props.medicationFormData;
		
		return (
			<div>
			<h4>Add a Medication to the List</h4>

			<form onSubmit={this.handleOnSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input 
						type='text'
						onChange={this.handleOnChange}
						name='name' 
						value={name} />
				</div>

				<div>
					<label htmlFor='generic_name'>Generic Name:</label>
					<input 
						type='text' 
						onChange={this.handleOnChange}
						name='generic_name'
						value={generic_name} />
				</div>

				<div>
					<label htmlFor='uses'>Uses:</label>
					<input 
						type='textarea' 
						onChange={this.handleOnChange}
						name='uses'
						value={uses} />
				</div>

				<div>
					<label htmlFor='side_effects'>Side Effects:</label>
					<input 
						type='textarea'
						onChange={this.handleOnChange} 
						name='side_effects'
						value={side_effects} />
				</div>

				<div>
					<label htmlFor='precautions'>Precautions:</label>
					<input 
						type='text' 
						onChange={this.handleOnChange}
						name='precautions'
						value={precautions} />
				</div>
				<button type="submit">Add Medication</button>
			</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		medicationFormData: state.medicationFormData
	}
}
 
export default connect(mapStateToProps, {
	updateMedicationFormData, 
	createMedication
})(MedicationForm);