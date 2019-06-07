import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'all',
			tabs: [],
			cards: []
		};
	}

	componentDidMount() {
		// Once the component has mounted, get the data and reflect that data on the state.
		if (tabData.length > 0) {
			this.setState(prevState => ({
				tabs: tabData
			}));
		}

		if (cardData) {
			this.setState(prevState => ({
				cards: cardData
			}));
		}
	}

	changeSelected = tab => {
		this.setState(prevState => ({
			selected: tab
		}));
	};

	filterCards = () => {
		const { selected, cards } = this.state;

		const matchingCards = cards.filter(card => card.tab === selected);

		if (matchingCards.length > 0) {
			return matchingCards;
		}

		return cards;
	};

	render() {
		const { selected } = this.state;
		return (
			<div className="content-container">
				<Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} selectedTab={selected} />
				<Cards cards={this.filterCards()} />
			</div>
		);
	}
}
