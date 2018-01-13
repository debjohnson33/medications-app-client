import React from 'react';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => (
	<div>
		{medications.map(medication => 
			<p><Link 
				to={`/medications/${medication.id}`} 
				key={medication.id}
			>Name: {medication.name}
			</Link></p>
		)}
	</div>
);

export default MedicationsList;

