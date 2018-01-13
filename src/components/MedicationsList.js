import React from 'react';
import { Link } from 'react-router-dom';

const MedicationsList = ({ medications }) => (
	<div>
		{medications.map(medication => 
			<p>Name: {medication.name} <button>More Info</button></p>
		)}
	</div>
);

export default MedicationsList;

