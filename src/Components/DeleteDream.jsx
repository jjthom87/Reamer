import React, { Component } from 'react';

// another "dumb" component responsible for just rendering the HTML relevant
// for ONE todo item
class DeleteDream extends Component {
	onFormSubmit(e){
		e.preventDefault();

		var { id } = this.props;

		this.props.onDelete(id);
	}
	render() {

		return (
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<button>Delete</button>
			</form>
		);
	}
}

export default DeleteDream;