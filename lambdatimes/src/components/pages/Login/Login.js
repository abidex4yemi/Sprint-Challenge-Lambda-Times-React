import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormContainer } from './Form';
import { Navigation } from './Navigation';

export const Login = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if (username.trim() !== '') {
			setLoggedIn(true);
			localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
			localStorage.setItem('username', JSON.stringify(username));
			window.location.reload();
		}
	};

	const inputChange = (field, value) => {
		if (field === 'username') {
			setUsername(value);
		}

		if (field === 'password') {
			setPassword(value);
		}
	};

	return (
		<Container style={{ height: '100vh' }}>
			<Row>
				<Col>
					<Navigation />
					<FormContainer inputChange={inputChange} username={username} password={password} handleLogin={handleLogin} />
				</Col>
			</Row>
		</Container>
	);
};
