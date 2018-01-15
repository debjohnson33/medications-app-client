import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MedicationsPage from './MedicationsPage';
import Medication from '../components/Medication';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import './App.css';
import MedicationForm from '../components/MedicationForm';
//import MedicationEditForm from '../components/MedicationEditForm' 

class App extends Component {

  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Navbar />
	      	<Switch>
	      		<Route exact path='/' component={Home}/>
	      		<Route exact path='/medications/new' component={MedicationForm}/>
	      		<Route exact path='/medications/:id' component={Medication}/>
	      		<Route exact path='/medications' component={MedicationsPage}/>
	      		//<Route exact path='/medications/:id/edit' component={MedicationEditForm}/>
	      	</Switch>
	      </div>
	    </Router>
    );
  }
}

export default App;