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

			render() {
				return <LoginPage />;
			}
		};
	};
};

export const AuthenticateNewsPage = requiresAuth(Login)(News);
