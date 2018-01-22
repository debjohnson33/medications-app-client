import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../actions/reviews';


class Reviews extends Component {
		debugger;
	
	componentDidMount() {
		const medication_id = this.props.medication_id;
		if (this.props.reviews.length === 0) {
			this.props.fetchReviews(medication_id);

		}
	}

	render() {

		const reviews = this.props.reviews;

		return(
			<div>
				{reviews.map(review => 
					<div key={review.id}>
						<h4>Review:</h4>
						<p>Rating: {review.rating}</p>
						<p>Comment: {review.comment}</p>
					</div>
				)}
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return ({
		reviews: state.reviews
	});
};

export default connect(mapStateToProps, { fetchReviews })(Reviews);	