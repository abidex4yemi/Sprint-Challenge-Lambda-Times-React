import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormContainer } from './Form';
import { Navigation } from './Navigation';

export const Login = () => {
	return (
		<Container style={{ height: '100vh' }}>
			<Row>
				<Col>
					<Navigation />
					<FormContainer />
				</Col>
			</Row>
		</Container>
	);
};
