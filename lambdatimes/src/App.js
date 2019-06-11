import React from 'react';
import styled from 'styled-components';
import { AuthenticateNewsPage } from './authentication/requiresAuth';

const AppStyles = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #f1f1f1;
	color: #333;
	font-family: 'PT Sans', sans-serif;
`;

/**
 * @description Main application component
 * 
 * @returns {Object}
 */
const App = () => {
	return (
		<AppStyles>
			<AuthenticateNewsPage />
		</AppStyles>
	);
};

export default App;
