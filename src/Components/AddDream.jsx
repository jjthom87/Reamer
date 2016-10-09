import React, { Component } from 'react';

class AddDream extends Component {
	constructor(...args){
		super(...args)
		this.state = {
		}
	}
	onCreateDream(e){
		e.preventDefault();

		var creds = {};
		var title = this.refs.title.value;
		var description = this.refs.description.value;

		if (title.length > 0) {
			this.refs.title.value = '';
			creds.title = title;
		}

		if (description.length > 0) {
			this.refs.description.value = '';
			creds.description = description;
		}

		this.props.onDreamCreate(creds);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onCreateDream.bind(this)}>
					<div>
						<input type="text" ref="title" placeholder="Dream Title"/>
					</div>
					<div>
						<textarea ref="description" placeholder="Dream Description"></textarea>
					</div>
					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		);
	}
}

export default AddDream;