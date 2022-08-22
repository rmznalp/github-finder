import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
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

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg: msg, type: type } });

		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render() {
		const { users, loading } = this.state;
		return (
			<div className='App'>
				<Navbar title='Github Finder' />
				<div className='container'>
					<Alert alert={this.state.alert} />
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
						setAlert={this.setAlert}
					/>
					<Users users={users} loading={loading} />
				</div>
			</div>
		);
	}
}

export default App;
