import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMedications } from '../actions/medications';
import MedicationsList from '../components/MedicationsList';

class Medications extends Component {

	componentDidMount() {
		this.props.fetchMedications();
	}

	render() {
		const { medications } = this.props;
		return (
			<div>
				<h3>Medications</h3>
				<MedicationsList medications={medications}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications,
	});
};

export default connect(mapStateToProps, { fetchMedications })(Medications);