import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => {
	const renderMedications = medications.map(medication =>
		<Link 
			to={`/medications/${medication.id}`}
			key={medication.id} 
		>{medication.name}
		</Link>
	);

	return (
		<div>
			{renderMedications}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		medications: state.medications
	};
}

export default connect(mapStateToProps)(MedicationsList);

