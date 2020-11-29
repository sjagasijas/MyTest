import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Table from './Table';

export default class Index extends Component {

	render(){
		return (
			<Router>

				<div>

					<Link to="inc"> Inc </Link> 
					<Route exact path="/inc" component={Table}/>

				</div>

			</Router>

			);


	}
	}