import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get('https://api.github.com/users');
	// 	this.setState({ users: res.data, loading: false });
	// }

	searchUsers = async (text) => {
		this.setState({ loading: true });
		console.log(text);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	render() {
		return (
			<div className='App'>
				<Navbar title='Github Finder' />
				<div className='container'>
					<Search searchUsers={this.searchUsers} />
					<Users users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
