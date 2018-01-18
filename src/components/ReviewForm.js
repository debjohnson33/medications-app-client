import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactRadioButtonsGroup, ReactRadioButton } from 'react-radio-buttons-group';

import { updateReviewFormData } from '../actions/reviewForm';
import { createReview } from '../actions/reviews';

class ReviewForm extends Component {
	constructor() {
		super();
		this.state = {
			rating: 5
		}
	}

	onRadiochange = value => {
		this.setState({
			rating: value
		})
	};

	handleOnSubmit = event => {
		event.preventDefault();

		const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {
			rating: this.state.selectedOption,
			comment: this.props.reviewFormData.comment
		})
		console.log(currentReviewFormData);
		//this.props.updateReviewFormData(currentReviewFormData)
		console.log(this.state.selectedOption);
		console.log(this.props.reviewFormData.comment);
	}
	
	render() {

		const { rating, comment } = this.props.reviewFormData;

		return (
			<div>
				<form onSubmit={this.handleOnSubmit} >
					<label htmlFor='rating'>Rating (1 lowest, 5 highest):</label>
				        <ReactRadioButtonsGroup horizontal onChange={this.onRadiochange}>
				          <ReactRadioButton value="1">1</ReactRadioButton>
				          <ReactRadioButton value="2">2</ReactRadioButton>
				          <ReactRadioButton value="3">3</ReactRadioButton>
				          <ReactRadioButton value="4">4</ReactRadioButton>
				          <ReactRadioButton value="5">5</ReactRadioButton>
				        </ReactRadioButtonsGroup>					
					<br /><br />
					<label htmlFor='Comment'>Comment:</label>
					<input type='textarea' value={comment} /><br /><br />
					
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