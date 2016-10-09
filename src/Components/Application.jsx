
import React, { Component, cloneElement } from 'react';
import Nav from '../Components/Nav';

class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React component's constructor method, you must
	  // call super() so it will instantiate the Component class it inherits
	  // from
		super(props, context);

		// set initial state
	}
	componentWillMount(){

	}
	render() {

		return (
			<div className="Application">
				<Nav/>
				{
					// this component's children is the component from routes.jsx that
					// react-router matched! (ie IndexPage/CompletedPage/ActivePage)
					// sine react-router already instantiated/rendered that child
					// component, the only way we can overwrite its props is if we clone
					// it and pass it new props. dont worry about it too much for now.
					cloneElement(this.props.children, {
						// pass down all items as-is. on the child component, they will be
						// available as a prop (this.props.items)!
					  // we must pass down our toggleCompleted method so that the
					  // individual TodoItem components can invoke it and thus update
					  // our state. when it's invoked, it relies on `this` mapping to
					  // THIS component instance when it calls setState, which is why we
					  // need to bind here.
				  })
				}
			</div>
		);

	}
}

export default Application;