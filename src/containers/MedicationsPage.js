import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMedications } from '../actions/medications';
import MedicationsList from '../components/MedicationsList';

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
				<h3>Medications</h3>
				<MedicationsList medications={this.props.medications} />
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