import React from 'react';

const Reviews = ({ reviews }) => (
	<div>
		{reviews.map(review => 
			<div>
				<h3>Review(s):</h3>
				<p>Rating: {review.rating}</p>
				<p>Comment: {review.comment}</p>
			</div>
		)}
	</div>
);

export default Reviews;