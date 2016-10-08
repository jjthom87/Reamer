import React, { Component } from 'react';
import CreateAccount from '../Components/CreateAccount';
import { Router , browserHistory } from 'react-router';

class CreateAccountPage extends Component {
	handleNewData (creds) {
		const newUser = {
			firstname: creds.firstname,
			lastname: creds.lastname,
			username: creds.username,
			email: creds.email,
			password: creds.password
		}
		fetch('/users/create', {
			method: 'post',
			body: JSON.stringify(newUser),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
		.then((results) => {
			console.log(results);
			if (results.createdAt){
				browserHistory.push('/login');
			} else {
				results.errors.filter((result) => alert(result.message));
			}
		})
	}
	render() {

		return (
			<div>
				<h1>Create Account Here</h1>
				<CreateAccount onCreate={this.handleNewData.bind(this)}/>
			</div>
		);

	}
}

export default CreateAccountPage;