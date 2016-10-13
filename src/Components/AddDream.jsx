import React, { Component } from 'react';

class AddDream extends Component {
	constructor(...args){
		super(...args)
		this.state = {
			selection: ''
		}
	}
	handleRadio(e){
		this.setState({
			selection: e.target.value
		})
	}
	onCreateDream(e){
		e.preventDefault();

		const { selection } = this.state;

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

		creds.selection = selection

		this.props.onDreamCreate(creds);
	}
	render() {
		const { selection } = this.state;

		return (
			<div className="row">
				<div className="column small-centered small-11 medium-6 large-5">
					<div className="container">
						<form onSubmit={this.onCreateDream.bind(this)}>
								<h2 className = "text-center">Add Dream</h2>
							<div>
								<input type="text" ref="title" placeholder="Dream Title"/>
							</div>
							<div>
								<textarea ref="description" placeholder="Dream Description"></textarea>
							</div>
							<p className="nightmareText">Nightmare?</p>
								<div className="nightmareRadio">
									Yes <input 
											className="yesNightmare" 
											type="radio" 
											value="Yes" 
											name="nightmareChoice"
											checked={selection === "Yes"} 
											onChange={this.handleRadio.bind(this)}
										/>
									No <input 
											className="noNightmare" 
											type="radio" 
											value="No" 
											name ="nightmareChoice"
											checked={selection === "No"} 
											onChange={this.handleRadio.bind(this)}
										/>
								</div>
							<div>
								<input className="button expanded hollow" type="submit" placeholder="Add Dream" />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddDream;