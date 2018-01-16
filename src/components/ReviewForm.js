import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Select from 'react-select';

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

		const options = ['1', '2', '3', '4', '5'];
		const { rating, comment } = this.props.reviewFormData;

		return (
			<div>
				<form>
					<label htmlFor='rating'>Select Rating: 1 highest, 5 lowest</label>
					<select
						value={options}
						onChange={this.handleRatingSelect}
						placeholder="Select a Rating">
						{options}
					</select><br /><br />
					<label htmlFor='Comment'>Comment:</label>
					<input type='text' comment={comment} /><br /><br />
					
					<button type="submit">Add Review</button>
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