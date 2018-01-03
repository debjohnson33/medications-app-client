import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMedications } from '../actions/medications';

class Medications extends Component {

	//componentDidMount() {
	//	this.props.fetchMedications()
	//}

	render() {
		return (
			<div>
				<h3>Medications</h3>
				{this.props.medications.map(medication => 
					<div>
						<p>Name: {medication.name} <button>More Info</button></p>
					</div>

				)}
			</div>
		)
	}
}

export default Medications;


