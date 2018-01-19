import React from 'react';

const FormError = () => {
	const style = { color: 'red' }

	return (
		<p style={style}>Error: Please complete all fields and only put a rating between 1 and 5 to save your review</p>
	)
}

export default FormError;