import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedications} from '../actions/medications';
import MedicationsList from '../components/MedicationsList';
import MedicationForm from '../components/MedicationForm';
import './medicationsPage.css'

class MedicationsPage extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			console.log('component did mount')
			this.props.fetchMedications();
		}
	}

	render() {
		return (
			<div>
				<div className="medForm">
					<MedicationForm />
				</div>
				<div className="medList">
					<h3>Medications</h3>
					<MedicationsList medications={this.props.medications} />
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

///const mapDispatchToProps = (dispatch) => {
//	return ({actions: bindActionCreators(actions, dispatch)})
//}

export default connect(mapStateToProps, { fetchMedications })(MedicationsPage);