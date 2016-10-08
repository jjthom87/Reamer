import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';


class Nav extends Component {
	render(){
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li>
							<IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
						</li>
						<li>
							<Link to='/create' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Create Account Here</Link>
						</li>
						<li>
							<Link to='/login' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</Link>
						</li>
						<li>
							<Link to='/home' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Page</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;

//home onClick make a fetch request home. and then if that response comes back with an actual user, then carry onto home, otherwise go to fucking main.
//same 