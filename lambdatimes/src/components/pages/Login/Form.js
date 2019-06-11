import React from 'react';
import { Container, Row, Col, Form, Button, Input, FormGroup, Card } from 'reactstrap';

export const FormContainer = props => {
	const { inputChange, password, username, handleLogin } = props;
	return (
		<Container style={{ height: '100vh', padding: '25vh 0' }}>
			<Row>
				<Col sm={{ size: 4, offset: 4 }}>
					<Card body>
						<h3 style={{ textAlign: 'center', paddingBottom: '30px' }}>Welcome back!</h3>
						<Form>
							<FormGroup>
								<Input
									type="text"
									name="username"
									value={username}
									id="username"
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
									id="password"
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

							<Button type="button" color="success" block onClick={() => handleLogin()}>
								login
							</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
