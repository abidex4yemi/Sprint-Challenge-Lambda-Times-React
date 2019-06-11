import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormContainer } from './Form';
import { Navigation } from './Navigation';

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			username: '',
			password: ''
		};
	}

	handleLogin = () => {
		this.setState(prevState => {
			const { username } = prevState;

			if (username.trim() !== '') {
				localStorage.setItem('loggedIn', JSON.stringify(true));
				localStorage.setItem('username', JSON.stringify(username));

				window.location.reload();
				return {
					loggedIn: true
				};
			}
		});
	};

	inputChange = (field, value) => {
		this.setState(prevState => ({
			[field]: value
		}));
	};

	render() {
		const { username, password } = this.state;

		return (
			<Container style={{ height: '100vh' }}>
				<Row>
					<Col>
						<Navigation />
						<FormContainer
							inputChange={this.inputChange}
							username={username}
							password={password}
							handleLogin={this.handleLogin}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}
