import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medications';
import MedicationsList from '../components/MedicationsList';

class Medications extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			console.log('component did mount')
			this.props.actions.fetchMedications();
		}
	}

	render() {
		const { medications } = this.props;
		let userMessage;

		if (this.props.hasErrored) {
			userMessage = (
				<div><p>Sorry, there was an error loading the medications</p></div>
			)
		} 
		if (this.props.isLoading) {
			userMessage = (
				<div><p>Loading medications...</p></div>
			)
		}
		return (
			<div>
				<h3>Medications</h3>
				{userMessage}
				<MedicationsList medications={medications}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications,
		hasErrored: state.medicationsHasErrored,
		isLoading: state.itemsIsLoading
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({actions: bindActionCreators(actions, dispatch)})
}

export default connect(mapStateToProps, mapDispatchToProps)(Medications);