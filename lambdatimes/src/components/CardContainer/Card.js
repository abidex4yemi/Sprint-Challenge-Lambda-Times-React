import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyle = styled.div`
	border-bottom: 1px solid lightgrey;
	display: flex;
	justify-content: space-between;
	align-items: none;
	flex-direction: column;
	background-color: #fff;
	width: 380px;
	margin-bottom: 16px;
	padding: 24px;
`;

const HeadlineStyles = styled.div`
	font-size: 25px;
	font-family: Didot, serif;
`;

const AuthorStyles = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	margin-top: 15px;

	& span {
		padding-left: 10px;
		font-size: 12px;
		letter-spacing: 1px;
		font-weight: bold;
	}
`;

const ImgContainerStyles = styled.div`
	padding-right: 10px;
	border-right: 1px solid lightgrey;
	height: 40px;

	& img {
		width: 40px;
	}
`;

const Card = props => {
	const { headline, img, author } = props;

	return (
		<CardStyle>
			<HeadlineStyles>{headline}</HeadlineStyles>
			<AuthorStyles>
				<ImgContainerStyles>
					<img src={img} alt={author} />
				</ImgContainerStyles>
				<span>By {author}</span>
			</AuthorStyles>
		</CardStyle>
	);
};

// Validate component properties data type
Card.propTypes = {
	headline: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default Card;
