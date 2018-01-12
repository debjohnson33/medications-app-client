import React from 'react';
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

export default MedicationsList;

