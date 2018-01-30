import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedications} from '../actions/medications';
import MedicationsList from '../components/MedicationsList';
import MedicationForm from '../components/MedicationForm';
import './medicationsPage.css'

class MedicationsPage extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			this.props.fetchMedications();
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-3">
					<h3>Medications</h3>
					<MedicationsList medications={this.props.medications} />
				</div>	
				<div className="col-2"></div>
				<div className="col-3">
					<MedicationForm />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications
	});
};

export default connect(mapStateToProps, { fetchMedications })(MedicationsPage);