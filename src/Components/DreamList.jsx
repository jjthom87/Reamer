import React, { Component } from 'react';
import Dream from './Dream';

// this component is "dumb" as it has no state. really all its responsible
// for is iterating over an array of items and rendering TodoItem for each
// one
class DreamList extends Component {

	render() {
		const { dreams, handleDeleteDream } = this.props;

		return (
			<ul>
				{
					dreams.map((dream, index) =>
						<Dream
							title={dream.title}
							description={dream.description}
							handleDeleteDream={handleDeleteDream}
							id={dream.id}
							key={index}
						/>
					)
				}
			</ul>
		);
	}
}

export default DreamList;