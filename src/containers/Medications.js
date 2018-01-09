import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medications';

class Medications extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			console.log('component did mount');
			this.props.actions.fetchMedications();
		}
	}

	render() {
		const { medications } = this.props;
		return (
			<div>
				<h3>Medications</h3>
				{medications.map(medication => 
					<div>
						<p>Name: {medication.name} <button>More Info</button></p>
					</div>

				)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications,
	});
};

const mapDispatchToProps = dispatch => {
	return { actions: bindActionCreators(actions, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(Medications);