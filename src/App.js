import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
	state = {
		users: [],
		user: {},
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

	getUser = async (username) => {
		this.setState({ loading: true });
		const res = await axios.get(`https://api.github.com/users/${username}`);
		this.setState({ user: res.data, loading: false });
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg: msg, type: type } });

		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render() {
		const { users, loading, user } = this.state;

		return (
			<Router>
				<div className='App'>
					<Navbar title='Github Finder' />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Routes>
							<Route
								path='/'
								element={
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users users={users} loading={loading} />
									</Fragment>
								}
							/>
							<Route path='/about' element={<About />} />
							<Route
								path='/user/:login'
								element={
									<User getUser={this.getUser} user={user} loading={loading} />
								}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
