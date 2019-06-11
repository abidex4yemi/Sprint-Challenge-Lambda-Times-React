import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	background-color: #fff;
	border-bottom: 1px solid lightgrey;
	width: 100%;
	height: 120px;
	margin-top: 44px;
	padding-bottom: 15px;

	@media (min-width: 1280px) {
		.header {
			width: 1280px;
		}
	}

	& h1 {
		font-size: 60px;
		font-family: Didot, serif;
		font-weight: bold;
		flex: 8;
		text-align: center;
		color: #000;
	}

	& span {
		align-self: flex-end;
		font-size: 11px;
		font-weight: bold;
		letter-spacing: 1px;
	}
`;

const DateStyles = styled.span`
	margin-left: 25px;
	flex: 1;
`;

const TemperatureStyles = styled.span`
	text-align: right;
	margin-right: 25px;
	flex: 1;
`;

const Header = () => {
	return (
		<HeaderStyles>
			<DateStyles>SMARCH 32, 2018</DateStyles>
			<h1>Lambda Times</h1>
			<TemperatureStyles>98°</TemperatureStyles>
		</HeaderStyles>
	);
};

export default Header;
