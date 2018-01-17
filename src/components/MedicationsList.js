import React from 'react';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => (
	<div>
		{medications.map(medication => 
			<p key={medication.id}>Name: <Link 
				key={medication.id}
				to={`/medications/${medication.id}`} 
			>{medication.name}
			</Link></p>
		)}
	</div>
);

export default MedicationsList;

