import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMedications } from '../actions/medications';

import MedicationsPage from './MedicationsPage';
import Medication from '../components/Medication';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import './App.css';


class App extends Component {

	componentDidMount() {
		if (this.props.medications.length === 0) {
			console.log('component did mount')
			this.props.fetchMedications();
		}
	}

  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Navbar />
	      	<Switch>
	      		<Route exact path='/' component={Home}/>
	      		<Route exact path='/medications' component={MedicationsPage}/>
	      		<Route exact path='/medications/:id' component={Medication}/>
	      	</Switch>
	      </div>
	    </Router>
    );
  }
}

const mapStateToProps = (state) => {
	return ({
		medications: state.medications
	});
};

export default connect(mapStateToProps, { fetchMedications })(App);