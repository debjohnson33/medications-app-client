import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
	return (
		<div>
			<footer>
			<br />
			<br />
				<div className="row">
					<div className="col-4">
						<h3>About Medications App</h3>
						<Link to={`/medications/about`}>About</Link>
					</div>
					<div className="col-4">
						<h3>External Links</h3>
						<a target="_blank" href="https://www.medicinenet.com/medications/article.htm" rel="noopener noreferrer" alt="Medicine Net Medication Index">Medicine Net Medication Index</a><br />
						<a target="_blank" href="https://www.rxlist.com/" rel="noopener noreferrer">RxList</a>
						
					</div>
					<div className="col-4">
						<h3>Contact Us</h3>
						<a href="mailto:debjohnson_11@yahoo.com">Send email to developer</a>
						<p>On Stack Overflow: @debjohnson_11</p>						
					</div>
				</div>
				
			</footer>
		</div>
	)
}

export default Footer;