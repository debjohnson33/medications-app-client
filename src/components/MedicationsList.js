import React from 'react';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => {
	const renderMedications = medications.map(medication =>
		<Link key={medication.id} to={`/medications/${medication.id}`}>{medication.name}</Link>
	);

	return (
		<div>
			{renderMedications}
		</div>
	);
};

export default MedicationsList;

