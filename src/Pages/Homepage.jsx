import React, { Component } from 'react';
import Logout from '../Components/Logout';
import { Router , browserHistory } from 'react-router';

class Homepage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: ''
		};
	}
	logoutHandler(){
		this.setState({
			loginUser: ''
		})
		browserHistory.push('/');
	}
	componentWillMount(){
		fetch('/home')
			.then((response) => response.json())
				.then((results) => {
				console.log(results);
				this.setState({
					loginUser: results.currentUser.firstname
				});
			});
	}
	render() {

		var { loginUser } = this.state;

		return (
			<div>
				<Logout onLogout={this.logoutHandler.bind(this)} />
				<h1>Welcome Home {loginUser}</h1>
			</div>
		);

	}
}

export default Homepage;