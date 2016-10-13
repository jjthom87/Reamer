import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
import Logout from '../Components/Logout';
import AddDream from '../Components/AddDream';
import AddComment from '../Components/AddComment';
import DreamList from '../Components/DreamList';
var _ = require('lodash');

var moment = require('moment');

class AllDreams extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			dreams: [],
			createdOn: ''
		};
	}
	logoutHandler(){
		fetch('/users/login', {
			method: 'delete',
			headers: {
				Auth: localStorage.getItem('token'),
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		});
	}
	componentWillMount(){
		fetch('/all')
		.then((response) => response.json())
		.then((results) => {
			this.setState({
				dreams: results
			});
		});
	}
	render() {

		var { dreams } = this.state;

		return (
			<div>
				<Logout onLogout={this.logoutHandler.bind(this)} />
				<h1 className = "text-center">All Dreams</h1>
				<h2 className = "text-center">Your Dreams</h2>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<DreamList dreams={dreams} />
							<AddComment />
						</div>
					</div>
				</div>
			</div>
		);

	}
}

export default AllDreams;