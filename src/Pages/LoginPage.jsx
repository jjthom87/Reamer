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
			body: loginUser
		}).then((results) => {
			browserHistory.push('/home');
		})
	}
	render() {
		return (
			<div>
				<h1>Login Here</h1>
				<Login onLogin={this.handleNewData.bind(this)}/>
			</div>
		);
	}
}

export default LoginPage;