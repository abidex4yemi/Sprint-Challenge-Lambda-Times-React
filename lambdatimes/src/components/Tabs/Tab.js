import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabStyles = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	color: #fff;
	background-color: #333;
	margin: 0 5px;
	padding: 2px 10px;
	font-size: 12px;
	letter-spacing: 2px;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}
`;

// Inline styles
const activeTabStyle = {
	backgroundColor: '#fff',
	color: '#333',
	border: '2px solid #333'
};

const Tab = props => {
	const { tab, changeSelected, selectedTab } = props;

	// check for current active tab and get styles
	const style = selectedTab === tab ? {} : activeTabStyle;

	return (
		<TabStyles
			style={style}
			onClick={() => {
				changeSelected(tab);
			}}
		>
			{tab.toUpperCase()}
		</TabStyles>
	);
};

Tab.propTypes = {
	tab: PropTypes.string.isRequired,
	changeSelected: PropTypes.func.isRequired,
	selectedTab: PropTypes.string.isRequired
};

export default Tab;
