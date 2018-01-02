import React from 'react';
import Medication from '../components/Medication'

const Medications = (props) => (
	<div>
	<div>
		<h3>Medications</h3>
			{props.medications.map(medication => 
				<div>
					<h4>Name: <a href={'/medications/' + medication.id} >{medication.name}</a></h4>
					<p>Generic Name: {medication.generic_name}</p>
				</div>
			)}	
	</div>

	</div>
)

export default Medications;


