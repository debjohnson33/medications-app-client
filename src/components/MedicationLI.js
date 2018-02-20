import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLike } from '../actions/medications';

const API_URL = process.env.REACT_APP_API_URL;

class MedicationLI extends Component {


	handleAddLike = () => {
		this.props.addLike(this.props.medication.id, this.props.medication.likes + 1)
	}

	callApi = () => {
		console.log('a')
		fetch(`${API_URL}/medications`)
			.then(response => { 
				console.log('b')
				return response.json()})
			.then(medications => {
				console.log('c', medications);
			})
			.catch(error => console.log('d', error));
			console.log('e')
	}

	render() {
		const { medication } = this.props
	
		return (

			<p key={medication.id}><Link
				key={medication.id} 
				to={`/medications/${medication.id}`} 
			>{medication.name}
			</Link> - {medication.generic_name}
			<button onClick={this.handleAddLike}>Like</button>{medication.likes}
			<button onClick={this.callApi}>Call Api</button>
			</p>
		)
	}
}

export default connect(null, { addLike })(MedicationLI);