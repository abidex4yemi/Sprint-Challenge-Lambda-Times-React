import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';
import uuid from 'uuid';

const TabsStyles = styled.div`
	border-bottom: 1px solid lightgrey;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 100%;
	height: 47px;
	background-color: #fff;

	@media (min-width: 1280px) {
		& {
			width: 1280px;
		}
	}
`;

const TopicsContainerStyles = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
`;

const TitleStyles = styled.span`
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
`;

const Tabs = props => {
	const { tabs, changeSelected, selectedTab } = props;

	return (
		<TabsStyles>
			<TopicsContainerStyles>
				<TitleStyles>TRENDING TOPICS:</TitleStyles>
				{tabs.map(tab => <Tab key={uuid()} tab={tab} changeSelected={changeSelected} selectedTab={selectedTab} />)}
			</TopicsContainerStyles>
		</TabsStyles>
	);
};

// Validate component properties data type
Tabs.propTypes = {
	tabs: PropTypes.array.isRequired,
	changeSelected: PropTypes.func.isRequired,
	selectedTab: PropTypes.string.isRequired
};

export default Tabs;
