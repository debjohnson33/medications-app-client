import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedications} from '../actions/medications';

class Medication extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			console.log('component did mount')
			this.props.fetchMedications();
		}
	}

	render() {

		const medications = this.props.medications;
		const medicationId = parseInt(this.props.match.params.id);
		const filteredMedication = medications.filter(medication => medication.id === medicationId);
		const medication = filteredMedication[0];
		return (
			<div>
				<p>Name: {medication.name}</p>
				<p>Generic Name: {medication.generic_name}</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications
	});
};

export default connect(mapStateToProps, {fetchMedications})(Medication);