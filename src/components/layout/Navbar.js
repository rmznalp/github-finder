import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className='fa fa-github' />
				{props.title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
