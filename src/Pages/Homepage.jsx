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

		const updateDreams = dreams.filter((dream) => !dream.active);

		// if we found an item w/ that id, we toggle its `isCompleted` property
			fetch(`/dream/delete/${dream.id}`,{
				method: 'PUT',
				body: JSON.stringify(dream),
				headers: {
					'content-type': 'application/json'
				}
			}).then((response) => response.json())
			.then((results) => {
				for(var i = 0; i < updateDreams.length; i++){
					if (updateDreams[i].id === dream.id){
						dreams.splice(updateDreams[i], 1)
						this.setState({
							dreams: dreams
						});
					}
				}
			});	
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
				<h1 className = "text-center">Welcome Home {loginUser}</h1>
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