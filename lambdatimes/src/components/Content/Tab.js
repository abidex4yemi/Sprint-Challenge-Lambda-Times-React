import React from 'react';

const Tab = props => {
	const { tab, changeSelected, selectedTab } = props;
	const style = selectedTab === tab ? 'tab active-tab' : 'tab';

	return (
		<div
			className={style}
			onClick={() => {
				changeSelected(tab);
			}}
		>
			{tab.toUpperCase()}
		</div>
	);
};

// Make sure you include PropTypes on your props.

export default Tab;
