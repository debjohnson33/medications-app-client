import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
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
		const { medications } = this.props;
		
		return (
			<div>
				<h3>Medications</h3>
				<div>
				
					{medications.map(medication =>
						<Link 
							to={`/medications/${medication.id}`}
							key={medication.id} 
						>{medication.name}
						</Link>
					)}
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

///const mapDispatchToProps = (dispatch) => {
//	return ({actions: bindActionCreators(actions, dispatch)})
//}

export default connect(mapStateToProps, { fetchMedications })(MedicationsPage);