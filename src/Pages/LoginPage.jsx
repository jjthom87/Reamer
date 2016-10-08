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
				'content-type': 'application/json'
			}
		}).then((results) => {
			if (results.statusText === "OK"){
				browserHistory.push('/home');
			} else {
				alert('Wrong Login Credentials');
			}
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