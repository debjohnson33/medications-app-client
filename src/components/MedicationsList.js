import React from 'react';
import MedicationLI from '../components/MedicationLI';

const MedicationsList = ({ medications }) => (
	<div>
		{medications.map(medication => 
			<MedicationLI medication={medication} key={medication.id}/>
		)}
	</div>
);

export default MedicationsList;

