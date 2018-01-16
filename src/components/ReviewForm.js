import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateReviewFormData } from '../actions/reviewForm';
import { createReview } from '../actions/reviews';

class ReviewForm extends Component {


	render() {

		const { rating, comment } = this.props.reviewFormData;

		return (
			<div>
				<form>
					<input type='text' comment={comment} />
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
	createReview
})(ReviewForm);