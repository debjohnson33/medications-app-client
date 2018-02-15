import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MedicationLI extends Component {

	constructor(props) {
		super(props)

		this.state = {
			counter: 0
		}

		this.addLike = this.addLike.bind(this)
	}

	addLike() {
		console.log('Like');
		this.setState ({
			counter: this.state.counter + 1
		})
	}

	render() {
		const { medication } = this.props
	
		return (

			<p key={medication.id} > <Link
				key={medication.id} 
				to={`/medications/${medication.id}`} 
			>{medication.name}
			</Link> - {medication.generic_name}
			<button onClick={this.addLike}>Like</button>{this.state.counter}
			</p>


		)
	}
}

export default MedicationLI;