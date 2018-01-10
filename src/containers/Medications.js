import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMedications } from '../actions/medications';

class Medications extends Component {

	componentDidMount() {
		console.log("component mounted")
		this.props.fetchMedications();
	}

	render() {
		const { medications } = this.props;
		return (
			<div>
				<h3>Medications</h3>
				Medications List
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications,
	});
};

//const mapDispatchToProps = dispatch => {
//	return { actions: bindActionCreators(actions, dispatch)};
//};

export default connect(mapStateToProps, { fetchMedications })(Medications);