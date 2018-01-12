import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MedicationsPage from './MedicationsPage';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Navbar />
	      	<Switch>
	      		<Route exact path='/' component={Home}/>
	      		<Route exact path='/medications' component={MedicationsPage}/>
	      	</Switch>
	      </div>
	    </Router>
    );
  }
}

export default App;