import React, { Component } from 'react';
import Login from '../Components/Login';
import { Router , browserHistory } from 'react-router';

class LoginPage extends Component {
	handleNewData (creds) {
		const loginUser = {
			username: creds.username,
			password: creds.password
		}
		fetch('/users/login', {
			method: 'post',
			body: JSON.stringify(loginUser),
			headers: {
				'Authorization': 'Basic'+btoa('username:password'),
				'content-type': 'application/json',
				'accept': 'application/json'
			},
			credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if (results){
				browserHistory.push('/home');
			} else {
				alert('Incorrect Login Credentials');
			}
		})
	}
	render() {
		return (
			<div className="row">
				<div className="column small-centered small-11 medium-6 large-5">
					<div className="container">
						<h1 className="container_header text-center">Login</h1>
						<Login onLogin={this.handleNewData.bind(this)}/>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;