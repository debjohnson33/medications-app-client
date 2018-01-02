import React from 'react';

const Medications = (props) => (
	<div>
		<h3>Medications</h3>
			{props.medications.map(medication => 
				<div>
					<h4>Name: {medication.name}</h4>
					<p>Generic Name: {medication.generic_name}</p>
				</div>
			)}	
	</div>
)

export default Medications;


