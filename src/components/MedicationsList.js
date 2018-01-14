import React from 'react';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => (
	<div>
		{medications.map(medication => 
			<p>Name: <Link 
				to={`/medications/${medication.id}`} 
				key={medication.id}
			>{medication.name}
			</Link></p>
		)}
	</div>
);

export default MedicationsList;

