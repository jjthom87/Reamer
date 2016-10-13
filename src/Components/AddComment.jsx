import React, { Component } from 'react';

class AddComment extends Component {
	constructor(...args){
		super(...args)
		this.state = {
		}
	}
	onCommentSubmit(e){
		e.preventDefault();

		var comment = this.refs.comment.value;

		if (comment.length > 0) {
			this.refs.username.value = '';
			creds.username = username;
		}

		this.props.onLogin(comment);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onCommentSubmit.bind(this)}>
					<div>
						<input type="text" ref="comment" placeholder="Enter Comment"/>
					</div>
					<div>
						<input className="button expanded hollow" type="submit" />
					</div>
				</form>
			</div>
		);
	}
}

export default AddComment;