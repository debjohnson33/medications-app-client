import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Medications from './Medications';

const medications = [
	{
		name: "Zestril",
		generic_name: "Lisinopril",
		uses: "Lisinopril is used to treat high blood pressure",
		side_effects: "dizziness, lightheadedness, tiredness, headaches",
		precautions: "This drug may make you dizzy. Do not drive, use machinery, or do any activity that requires alertness until you are sure you can perform such activities safely."
	},
	{
		name: "Zyrtec",
		generic_name: "Cetirizine",
		uses: "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching",
		side_effects: "Drowsiness, tiredness, and dry mouth may occur. Stomach pain may also occur, especially in children",
		precautions: "This drug may make you drowsy. Alcohol or marijuana can make you more drowsy. Do not drive, use machinery, or do anything that needs alertness until you can do it safely."
	}
]

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Switch>
	      		<Route exact path='/' component={Home}/>
	      		<Route exact path='/medications' component={medications}/>
	        <header className="App-header">
	          <h1 className="App-title">Welcome to the Medications App!</h1>
	        </header>
	        <Medications medications={medications} />
	      </div>
	      </Switch>
	    </Router>
    );
  }
}

const mapStateToProps = (state) => {
	return { medications: state.medications };
};

export default connect(mapStateToProps)(App);