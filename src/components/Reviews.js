import React from 'react';

const Reviews = ({ reviews }) => (
	<div>
		{reviews.map(review => 
			<div>
				<p>Review:</p>
				<p>Rating: {review.rating}</p>
				<p>Comment: {review.comment}</p>
			</div>
		)}
	</div>
);

export default Reviews;