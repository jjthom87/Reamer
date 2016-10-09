import React, { Component } from 'react';
import DeleteDream from './DeleteDream';

// another "dumb" component responsible for just rendering the HTML relevant
// for ONE todo item
class Dream extends Component {

	render() {
		const { title, description, handleDeleteDream } = this.props;

		return (
			<li>
				<p>{title}</p>
				<p>{description}</p>
				<DeleteDream onDelete={this.handleDeleteDream.bind(this)}/>
			</li>
		);
	}
}

export default Dream;