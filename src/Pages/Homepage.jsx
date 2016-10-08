import React, { Component } from 'react';

class Homepage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			loginUser: ''
		};
	}

	render() {

		return (
			<div>
				<h1>Welcome Home</h1>
			</div>
		);

	}
}

export default Homepage;