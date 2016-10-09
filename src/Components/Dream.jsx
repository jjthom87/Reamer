import React, { Component } from 'react';

// another "dumb" component responsible for just rendering the HTML relevant
// for ONE todo item
class Dream extends Component {

	render() {
		const { id, title, description, handleDeleteDream } = this.props;

		return (
			<div className="text-center">
				<p className="dreamTitle">{title}</p>
				<p>{description}</p>
				<button className="button hollow" onClick={() => handleDeleteDream(id)}>Delete</button>
			</div>
		);
	}
}

export default Dream;