import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateReviewFormData } from '../actions/reviewForm';
import { createReview } from '../actions/reviews';

class ReviewForm extends Component {

	handleRatingSelect = event => {
		const { value } = event.target
		const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {
			rating: value
		})
		this.props.updateReviewFormData(currentReviewFormData)
	};

	render() {

		const { rating, comment } = this.props.reviewFormData;

		return (
			<div>
				<form>
					<label htmlFor='rating'>Rating (1 lowest, 5 highest):</label>
					<label>
						<input type="radio" value="1" checked={true} />
						1
					</label>
					<label>
						<input type="radio" value="2"  />
						2
					</label>
					<label>
						<input type="radio" value="3"  />
						3
					</label>
					<label>
						<input type="radio" value="4"  />
						4
					</label>
					<label>
						<input type="radio" value="5"  />
						5
					</label>
					<br /><br />
					<label htmlFor='Comment'>Comment:</label>
					<input type='text' comment={comment} /><br /><br />
					
					<button type="submit">Submit Review</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		reviewFormData: state.reviewFormData
	}
}
 
export default connect(mapStateToProps, {
	updateReviewFormData,
	createReview
})(ReviewForm);