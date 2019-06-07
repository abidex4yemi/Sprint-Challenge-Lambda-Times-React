import React from 'react';

const Card = props => {
	const { headline, tab, img, author } = props;

	return (
		<div className={`card ${tab}`}>
			<div className="headline">{headline}</div>
			<div className="author">
				<div className="img-container">
					<img src={img} />
				</div>
				<span>By {author}</span>
			</div>
		</div>
	);
};

export default Card;
