import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedications} from '../actions/medications';
import MedicationsList from '../components/MedicationsList';
import MedicationForm from '../components/MedicationForm';
import './medicationsPage.css'

class MedicationsPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			counter: 0
		}

		this.addLike = this.addLike.bind(this)
	}

	componentDidMount() {
		if (this.props.medications.length === 0) {
			this.props.fetchMedications();
		}
	}

	addLike() {
		console.log('Like');
		this.setState ({
			counter: this.state.counter + 1
		})
	}

	render() {
		const sortedMedications = this.props.medications.sort(function(a, b) {
    		let nameA = a.name.toUpperCase();
    		let nameB = b.name.toUpperCase();
    		if (nameA < nameB) {
        		return -1; 
        	}
    		if (nameA > nameB) {
        		return 1; 
        	}
    			return 0; 
    		});
		return (
			<div className="row">
				<div className="col-6" id="medList">
					<h3>Medications</h3>
					<MedicationsList addLike={this.addLike} medications={sortedMedications} counter={this.state.counter}/>
				</div>	
				<div className="col-6" id="medForm">
					<MedicationForm />
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

export default connect(mapStateToProps, { fetchMedications })(MedicationsPage);