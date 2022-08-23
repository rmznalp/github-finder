import React from 'react';
import { useParams } from 'react-router-dom';

const User = (props) => {
	const { login } = useParams();

	console.log(props);

	const { name, avatar_url, location, bio, blog, html_url } = props.user;
	const { loading } = props;
	return <div>{name}</div>;
};

export default User;
