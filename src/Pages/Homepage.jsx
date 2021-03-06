import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
import Logout from '../Components/Logout';
import AddDream from '../Components/AddDream';
import DreamList from '../Components/DreamList';
var _ = require('lodash');

var moment = require('moment');

class Homepage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			dreams: [],
			createdOn: ''
		};
	}
	handleDeleteDream(id){
		const { dreams } = this.state;

		const deleteDream = _.remove(dreams, dream => dream.id === id);

		fetch(`/dream/delete/${deleteDream[0].id}`,{
			method: 'DELETE',
			body: JSON.stringify(deleteDream),
			headers: {
				Auth: localStorage.getItem('token'),
				'content-type': 'application/json',
				'accept': 'application/json'
			},
			credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
				dreams: dreams
			})
		});	
	}
	handleAddDream(text){
		const { dreams } = this.state;

		const newDream = {
			title: text.title,
			description: text.description,
			nightmare: text.selection
		};
		console.log(newDream);
		fetch('/dream/create', {
			method: 'post',
			body: JSON.stringify(newDream),
			headers: {
				Auth: localStorage.getItem('token'),
				'content-type': 'application/json',
				'accept': 'application/json'
			},
			credentials: 'include'
		}).then((response) => response.json())
			.then((results) => {
			this.setState({
				dreams: dreams.concat(results),
				createdOn: moment()
			});
		});
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

		fetch('/home', {
			credentials: 'include',
			headers: {
				Auth: localStorage.getItem('token')
			}
		}).then((response) => response.json())
		.then((results) => {
			const filtered = results.dreams.filter((dream) => !dream.active);
			this.setState({
				loginUser: results.currentUser.firstname,
				dreams: filtered
			});
		});
	}
	render() {

		var { loginUser, dreams } = this.state;

		const updateDreams = dreams.filter((dream) => !dream.active);

		return (
			<div>
				<Logout onLogout={this.logoutHandler.bind(this)} />
				<h1 className = "text-center">Welcome Home </h1><h1 className="userName text-center">{loginUser}</h1>
				<AddDream onDreamCreate={this.handleAddDream.bind(this)} />
				<h2 className = "text-center">Your Dreams</h2>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<DreamList dreams={updateDreams} handleDeleteDream={this.handleDeleteDream.bind(this)}/>
						</div>
					</div>
				</div>
			</div>
		);

	}
}

export default Homepage;