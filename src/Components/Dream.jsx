import React, { Component } from 'react';

// another "dumb" component responsible for just rendering the HTML relevant
// for ONE todo item
class Dream extends Component {

	render() {
		const { id, title, description, handleDeleteDream } = this.props;

		return (
			<li>
				<p>{title}</p>
				<p>{description}</p>
				<button onClick={() => handleDeleteDream(id)}>Delete</button>
			</li>
		);
	}
}

export default Dream;