import React, { Component } from 'react';
import Logout from '../Components/Logout';
import AddDream from '../Components/AddDream';
import DreamList from '../Components/DreamList';
import { Router , browserHistory } from 'react-router';

class Homepage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			dreams: []
		};
	}
	handleDeleteDream(id){
		const { dreams } = this.state;

		// find the first item in our state which has the ID we're looking for (itemId)
		const dream = dreams.find((dream) => dream.id === id);


		// if we found an item w/ that id, we toggle its `isCompleted` property
		if (dream) {

			fetch(`/dream/delete/${dream.id}`,{
				method: 'DELETE',
				body: JSON.stringify(dream),
				headers: {
					'content-type': 'application/json'
				}
			}).then((response) => response.json())
			.then((results) => {
				this.setState({
					dreams: dreams
				});
			});	
		}
	}
	handleAddDream(text){
		const { dreams } = this.state;
		const newDream = {
			title: text.title,
			description: text.description
		};
		fetch('/dream/create', {
			method: 'post',
			body: JSON.stringify(newDream),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
			.then((results) => {
			this.setState({
				dreams: dreams.concat(results)
			});
		});
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
					loginUser: results.currentUser.firstname,
					dreams: results.dreams
				});
			});
	}
	render() {

		var { loginUser, dreams } = this.state;

		return (
			<div>
				<Logout onLogout={this.logoutHandler.bind(this)} />
				<h1>Welcome Home {loginUser}</h1>
				<AddDream onDreamCreate={this.handleAddDream.bind(this)} />
				<DreamList dreams={dreams} onDelete={this.handleDeleteDream.bind(this)}/>
			</div>
		);

	}
}

export default Homepage;