import React, { Component } from 'react';

class Homepage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: ''
		};
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
				<h1>Welcome Home {loginUser}</h1>
			</div>
		);

	}
}

export default Homepage;