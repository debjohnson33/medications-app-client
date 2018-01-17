import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateReviewFormData } from '../actions/reviewForm';
import { createReview } from '../actions/reviews';

class ReviewForm extends Component {
	constructor() {
		super();
		this.state = {
			selectedOption: 'option5'
		}
	}

	handleOptionChange = event => {
		this.setState({
			selectedOption: event.target.value
		})
	};

	handleOnSubmit = event => {
		event.preventDefault();

		const currentReviewFormData = Object.assign({}, this.props.reviewFormData, {
			rating: this.state.selectedOption,
			comment: this.props.reviewFormData.comment
		})
		this.props.updateReviewFormData(currentReviewFormData)
		console.log(this.state.selectedOption);
		console.log(this.props.reviewFormData.comment);
	}
	
	render() {

		const { rating, comment } = this.props.reviewFormData;

		return (
			<div>
				<form onSubmit={this.handleOnSubmit} >
					<label htmlFor='rating'>Rating (1 lowest, 5 highest):</label>
					<label>
						<input 
							name='rating' 
							type="radio" 
							value="option1" 
							checked={this.selectedOption === 'option1'} 
							onChange={this.handleOptionChange}
						/>
						1
					</label>
					<label>
						<input 
							name='rating' 
							type="radio" 
							value="option2" 
							checked={this.selectedOption === 'option2'} 
							onChange={this.handleOptionChange}
						/>
						2
					</label>
					<label>
						<input 
							name='rating' 
							type="radio" 
							value="option3" 
							checked={this.selectedOption === 'option3'} 
							onChange={this.handleOptionChange}
						/>
						3
					</label>
					<label>
						<input 
							name='rating' 
							type="radio" 
							value="option4" 
							checked={this.selectedOption === 'option4'} 
							onChange={this.handleOptionChange}
						/>
						4
					</label>
					<label>
						<input 
							name='rating' 
							type="radio" 
							value="option5" 
							checked={this.selectedOption === 'option5'} 
							onChange={this.handleOptionChange}
						/>
						5
					</label>
					<br /><br />
					<label htmlFor='Comment'>Comment:</label>
					<input type='textarea' comment={comment} /><br /><br />
					
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