import React from 'react';
import { Container, Row, Col, Form, Button, Label, Input, FormGroup, Card } from 'reactstrap';

export const Login = () => {
	return (
		<Container>
			<Row>
				<Col sm={{ size: 4, offset: 4 }}>
					<Card body>
						<h1>login</h1>
						<Form>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input type="text" name="username" id="username" />
							</FormGroup>

							<FormGroup>
								<Label for="password">Password</Label>
								<Input type="password" id="password" name="password" />
							</FormGroup>

							<Button type="button" color="success">
								login
							</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
