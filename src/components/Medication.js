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
		const medicationShow = () => {
			const medications = this.props.medications;
			const medicationId = parseInt(this.props.match.params.id);
			const filteredMedication = medications.filter(medication => medication.id === medicationId);
				return filteredMedication.map(medication => {
					return(
						<div key={medication.id}>
							<p>Name: {medication.name}</p>
							<p>Generic Name: {medication.generic_name}</p>
							<p>Uses: {medication.uses}</p>
							<p>Side Effects: {medication.uses}</p>
							<p>Precautions: {medication.precautions}</p>
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

export default connect(mapStateToProps, {fetchMedications})(Medication);