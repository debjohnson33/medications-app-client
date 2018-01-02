import React from 'react';
import Medication from '../components/Medication';

const Medications = (props) => (
	<div>
		<h3>Medications</h3>
			{props.medications.map(medication => <Medication medication={medication} /> )}
	</div>
)

export default Medications;


