import React, { useState } from 'react';
import TopBar from '../../layout/TopBar';
import Header from '../../layout/Header';
import CardContainer from '../../CardContainer/CardContainer';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup } from 'reactstrap';

export const News = () => {
	const [modal, setModal] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const toggle = () => {
		setModal(!modal);
	};

	const handleLogin = () => {
		if (username.trim() !== '') {
			setLoggedIn(!loggedIn);

			localStorage.setItem('loggedIn', JSON.stringify(true));
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
		<React.Fragment>
			<TopBar toggle={toggle} />
			<Header />
			<CardContainer />
			<div>
				<Modal isOpen={modal} toggle={() => toggle()} className={''}>
					<ModalHeader toggle={() => toggle()}>Welcome back log in</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Input
									type="text"
									name="username"
									value={username}
									placeholder="Enter username..."
									onChange={evt => {
										const value = evt.target.value;
										const field = evt.target.name;
										inputChange(field, value);
									}}
								/>
							</FormGroup>

							<FormGroup>
								<Input
									type="password"
									value={password}
									name="password"
									placeholder="Enter password..."
									onChange={evt => {
										const value = evt.target.value;
										const field = evt.target.name;
										inputChange(field, value);
									}}
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" size="lg" onClick={() => toggle()}>
							Close
						</Button>{' '}
						<Button
							color="primary"
							size="lg"
							onClick={() => {
								handleLogin();
								toggle();
							}}
						>
							login
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		</React.Fragment>
	);
};
