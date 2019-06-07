import React from 'react';
import Tab from './Tab';
import uuid from 'uuid';
const Tabs = props => {
	const { tabs, changeSelected, selectedTab } = props;

	return (
		<div className="tabs">
			<div className="topics">
				<span className="title">TRENDING TOPICS:</span>
				{tabs.map(tab => <Tab key={uuid()} tab={tab} changeSelected={changeSelected} selectedTab={selectedTab} />)}
			</div>
		</div>
	);
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
