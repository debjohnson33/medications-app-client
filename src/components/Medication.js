import React from 'react';
import { Link } from 'react-router-dom';

const Medication = ({ medication }) => (
	<div>
		<p><Link 
				to={`/medications/${medication.id}`}
				key={medication.id} 
			>{medication.name}
			</Link></p>
		<p>Generic Name: {medication.generic_name}</p>
	</div>
)

export default Medication;