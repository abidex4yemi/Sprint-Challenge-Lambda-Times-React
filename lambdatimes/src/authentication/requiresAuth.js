import React, { Component } from 'react';
import { News } from '../components/pages/news/News';
import { Login } from '../components/pages/Login/Login';

const requiresAuth = LoginPage => {
	return NewsPage => {
		return class extends Component {
			constructor(props) {
				super(props);
				this.state = {
					loggedIn: false
				};
			}

			componentDidMount() {
				if (localStorage.hasOwnProperty('loggedIn') && localStorage.getItem('loggedIn')) {
					const getUsername = JSON.parse(localStorage.getItem('loggedIn'));

					this.setState(prevState => ({
						loggedIn: getUsername
					}));
				}
			}

			render() {
				const { loggedIn } = this.state;

				return loggedIn ? <NewsPage /> : <LoginPage />;
			}
		};
	};
};

export const AuthenticateNewsPage = requiresAuth(Login)(News);
