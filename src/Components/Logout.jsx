import React, { Component } from 'react';

class Logout extends Component {
	onFormSubmit(e){
		e.preventDefault();

		var { loginUser } = this.props;

		this.props.onLogout(loginUser);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<button>Logout</button>
				</form>
			</div>
		);
	}
}

export default Logout;