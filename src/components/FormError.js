import React from 'react';

const FormError = () => {
	const style = { color: 'red' }

	return (
		<p style={style}>Error: Please complete all fields to save your review</p>
	)
}

export default FormError;