import React from 'react';

const Medication = ({ medication }) => (
	<div>
		<div>
			<h4>Name: <a href={'/medications/' + medication.id} >{medication.name}</a></h4>
			<p>Generic Name: {medication.generic_name}</p>
		</div>
	</div>
)

export default Medication;