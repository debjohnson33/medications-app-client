import React from 'react';

const Medication = ({ medication }) => (
	<div>
		<p>Name: {medication.name}</p>
		<p>Generic Name: {medication.generic_name}</p>
	</div>
)

export default Medication;