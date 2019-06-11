import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsStyle = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: none;
	flex-direction: row;
	width: 100%;
	margin-top: 16px;
	flex-wrap: wrap;

	@media (min-width: 1200px) {
		& {
			width: 1200px;
		}
	}
`;

const Cards = props => {
	const { cards } = props;

	return <CardsStyle>{cards.map(card => <Card key={uuid()} {...card} />)}</CardsStyle>;
};

// Validate component properties data type
Cards.propTypes = {
	cards: PropTypes.array.isRequired
};

export default Cards;
