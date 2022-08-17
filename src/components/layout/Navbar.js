import React from 'react';

function Navbar(props) {
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className='fa fa-github' />
				{props.title}
			</h1>
		</div>
	);
}

export default Navbar;
