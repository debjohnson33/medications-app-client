import React from 'react';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => (
	<div>
	
		{medications.map(medication =>
			<Link 
				to={`/medications/${medication.id}`}
				key={medication.id} 
			>{medication.name}
			</Link>
		)}
	</div>
);

export default MedicationsList;

