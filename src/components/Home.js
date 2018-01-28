import React from 'react';

const Home = (props) => {
	return(
		<div>
			<br />
			<header className="App-header">
	          <h1 className="App-title">Welcome to the Medications App!</h1>
	        </header>
	        <br />
	        <br />
	        <div>
	        	<img src={'/images/meds.jpg'} alt="Different color pills" />
			</div>
		</div>
	)
}

export default Home;