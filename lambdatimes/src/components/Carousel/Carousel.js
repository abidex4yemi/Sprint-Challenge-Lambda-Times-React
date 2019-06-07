import React, { Component } from 'react';
import styled from 'styled-components';
import { carouselData } from '../../data';

const CarouselStyles = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 500px;
	position: relative;
	overflow: hidden;
	margin-top: 16px;

	@media (min-width: 1200px) {
		& {
			width: 1200px;
		}
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	color: #fff;
	background-color: #333;
	font-size: 40px;
	border-radius: 50%;
	position: absolute;
	width: 50px;
	height: 50px;
	cursor: pointer;
	outline: 0;

	&:hover {
		color: #333;
		background-color: #fff;
		border: 2px solid #333;
	}

	& img {
		width: 100%;
		display: none;
	}
`;

const LeftButton = styled(Button)`
	top: 50%;
	left: 25px;
	transform: translate(0, -50%);
`;

const RightButton = styled(Button)`
	top: 50%;
	right: 25px;
	transform: translate(0, -50%);
`;

// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carouselData: [],
			current: 0
		};
	}
	componentDidMount() {
		if (carouselData.length > 0) {
			this.setState(prevState => ({
				carouselData
			}));
		}
	}

	leftClick = () => {
		const { carouselData, current } = this.state;
		const carouselLength = carouselData.length;

		const newCurrent = current - 1;

		if (current === 0) {
			this.setState(prevState => ({
				current: carouselLength - 1
			}));
		} else {
			this.setState(prevState => ({
				current: current - 1
			}));
		}
		console.log(newCurrent);
	};

	rightClick = () => {
		const { carouselData, current } = this.state;
		const carouselLength = carouselData.length;

		if (current === carouselLength - 1) {
			this.setState(prevState => ({
				current: 0
			}));
		} else {
			this.setState(prevState => ({
				current: current + 1
			}));
		}
	};

	selectedImage = () => {
		const { carouselData, current } = this.state;

		return <img src={`${carouselData[current]}`} style={{ display: 'block' }} alt="carousel images" />;
	};

	render() {
		return (
			<CarouselStyles className="carousel">
				<LeftButton className="left-button" onClick={this.leftClick}>
					{'<'}
				</LeftButton>
				{this.selectedImage()}
				<RightButton className="right-button" onClick={this.rightClick}>
					{'>'}
				</RightButton>
			</CarouselStyles>
		);
	}
}
