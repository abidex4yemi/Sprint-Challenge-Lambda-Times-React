import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data.
import { tabData, cardData } from '../../data';

// Initial app state (application data)
const initialState = {
	selected: 'all',
	tabs: [],
	cards: []
};

const ContentStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	componentDidMount() {
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

		// Find card that matches `selected`
		const matchingCards = cards.filter(card => card.tab === selected);

		// Check if matchingCards array is empty
		if (matchingCards.length > 0) {
			return matchingCards;
		}

		// return all cards array
		return cards;
	};

	render() {
		const { selected } = this.state;

		return (
			<ContentStyles>
				<Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} selectedTab={selected} />
				<Cards cards={this.filterCards()} />
			</ContentStyles>
		);
	}
}
