import React from 'react';
import { Link } from 'react-router-dom';

const Medication = ({ medication }) => (
	<div>
		<p>Name: {medication.name}</p>
		<p>Generic Name: {medication.generic_name}</p>
	</div>
)

export default Medication;