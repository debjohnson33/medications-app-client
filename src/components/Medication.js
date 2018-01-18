import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedications, deleteMedication } from '../actions/medications';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

class Medication extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			console.log('component did mount')
			this.props.fetchMedications();
		}
	}

	handleOnDelete = event => {
		event.preventDefault();
		const medicationId = this.props.match.params.id;
		this.props.deleteMedication(medicationId);
		this.props.history.push('/medications');
	}

	render() {
		const medicationShow = () => {
			const medications = this.props.medications;
			const medicationId = parseInt(this.props.match.params.id, 10);
			const filteredMedication = medications.filter(medication => medication.id === medicationId);
				return filteredMedication.map(medication => {
					return(
						<div key={medication.id}>
							<p>Name: {medication.name}</p>
							<p>Generic Name: {medication.generic_name}</p>
							<p>Uses: {medication.uses}</p>
							<p>Side Effects: {medication.uses}</p>
							<p>Precautions: {medication.precautions}</p>
							<button onClick={this.handleOnDelete}>Delete Medication</button><br /><br />
							<p>Add a Review:</p>
							<ReviewForm medicationId={medication.id}/>
							<h3>Reviews:</h3>
							<Reviews reviews={medication.reviews}/>
						</div>
					)
				})
		}

		return (
			<div>
				<h3>Medication</h3>
				{medicationShow()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications
	});
};

export default connect(mapStateToProps, {fetchMedications, deleteMedication })(Medication);