import React, { Component } from 'react';
import Dream from './Dream';

// this component is "dumb" as it has no state. really all its responsible
// for is iterating over an array of items and rendering TodoItem for each
// one
class DreamList extends Component {

	render() {
		const { dreams, handleDeleteDream } = this.props;

		var noDreams = () => {
			if (dreams.length === 0){
				return (
					<p className="container__message">You Have Had No Dreams</p>
				);
			}
		}

		return (
			<div>
				<p>
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
					{noDreams()}
				</p>
			</div>
		);
	}
}

export default DreamList;