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
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;