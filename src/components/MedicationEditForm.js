import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMedicationFormData } from '../actions/medicationForm';
import { fetchMedications, editMedication } from '../actions/medications';

class MedicationEditForm extends Component {

	componentWillMount() {
		this.props.fetchMedications();
	}

	componentDidMount() {
		const allMedications = this.props.medications
		const currentMedication = this.props.match.params.id
		const medicationFormData = allMedications.filter(allMedication => allMedication.id === currentMedication)
		this.props.updateMedicationFormData(medicationFormData)
		console.log(medicationFormData)
	}

	handleOnChange = event => {
		const { name, value } = event.target;
		const currentMedicationFormData = Object.assign({}, this.props.medicationFormData, {
			[name]: value
		})
		this.props.updateMedicationFormData(currentMedicationFormData)
	}

	handleOnSubmit = event => {
		event.preventDefault();
		const medicationId = this.props.match.params.id
		this.props.editMedication(medicationId, this.props.medicationFormData);
	}

	render() {

		const { name, generic_name, uses, side_effects, precautions } = this.props.medicationFormData;
		
		return (
			<div>
			<h4>Update This Medication</h4>

			<form onSubmit={this.handleOnSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input 
						type='text'
						onChange={this.handleOnChange}
						name='name' 
						value={name} 
						placeholder={name}
					/>
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
				<button type="submit">Edit Medication</button>
			</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		medications: state.medications,
		medicationFormData: state.medicationFormData
	}
}
 
export default connect(mapStateToProps, {
	updateMedicationFormData, 
	editMedication,
	fetchMedications
})(MedicationEditForm);