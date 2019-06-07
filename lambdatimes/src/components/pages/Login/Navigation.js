import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';

export const Navigation = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Navbar color="light" light expand="md">
						<NavbarBrand href="/">Lambda Times</NavbarBrand>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#!">News</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#!">Learn</NavLink>
							</NavItem>
						</Nav>
					</Navbar>
				</Col>
			</Row>
		</Container>
	);
};
