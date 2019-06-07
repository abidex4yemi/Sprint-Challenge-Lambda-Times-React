import React from 'react';
import uuid from 'uuid';
import Card from './Card';

const Cards = props => {
	const { cards } = props;

	return <div className="cards-container">{cards.map(card => <Card key={uuid()} {...card} />)}</div>;
};

// Make sure you include prop types for all of your incoming props

export default Cards;
