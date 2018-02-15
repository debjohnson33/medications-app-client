import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLike } from '../actions/medications';

class MedicationLI extends Component {

	handleAddLike() {
		console.log('Like');
		this.props.addLike(this.props.medication.id, this.props.medication.likes + 1)
	}

	render() {
		const { medication } = this.props
	
		return (

			<p key={medication.id} > <Link
				key={medication.id} 
				to={`/medications/${medication.id}`} 
			>{medication.name}
			</Link> - {medication.generic_name}
			<button onClick={this.handleAddLike}>Like</button>{this.state.counter}
			</p>


		)
	}
}

export default connect(null, { addLike }(MedicationLI);