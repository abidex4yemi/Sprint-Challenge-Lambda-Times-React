import React from 'react';
import { Container, Row, Col, Form, Button, Input, FormGroup, Card } from 'reactstrap';

export const FormContainer = () => {
	return (
		<Container style={{ height: '100vh', padding: '25vh 0' }}>
			<Row>
				<Col sm={{ size: 4, offset: 4 }}>
					<Card body>
						<h3 style={{ textAlign: 'center', paddingBottom: '30px' }}>Welcome back!</h3>
						<Form>
							<FormGroup>
								<Input type="text" name="username" id="username" placeholder="Enter username..." />
							</FormGroup>

							<FormGroup>
								<Input type="password" id="password" name="password" placeholder="Enter password..." />
							</FormGroup>

							<Button type="button" color="success" block>
								login
							</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
