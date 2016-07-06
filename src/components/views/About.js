import React from "react";
//Imports for rest of the components here
import Controls from '../shared/Controls';
import General from "./aboutViews/General";
import Author from "./aboutViews/Author";
import HowToUse from "./aboutViews/HowToUse";
import FolderStructure from "./aboutViews/FolderStructure";

export default class About extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 1,
			slides: {
				1: "<General></General>",
				2: HowToUse,
				3: FolderStructure,
				4: Author
			}
		};
	}

	nextSlide() {
		this.setState({
			slide: this.state.slide + 1
		})
	}

	prevSlide() {
		this.setState({
			slide: this.state.slide - 1
		})
	}

	
	
	render() {
		const slideName = this.state.slides[this.state.currentSlide];
		console.log(slideName);
		return (
			<div>
				<Controls></Controls>
				slideName
			</div>
		);
		//pass the functions as props when you create child compontents!
//		switch ( this.state.slide ) {
//			case 1:
//				return (
//					<div>
//					<Controls></Controls>
//					<h1>We are in {this.state.slide} </h1>
//					</div>
//				);
//			case 2:
//				return (
//					<div>
//					<Controls></Controls>
//					<h1>We are in {this.state.slide} </h1>
//					</div>
//				);
//			case 3:
//				return (
//					<div>
//					<Controls></Controls>
//					<h1>We are in {this.state.slide} </h1>
//					</div>
//				);
//			case 4:
//				return (
//					<div>
//					<Controls></Controls>
//					<h1>We are in {this.state.slide} </h1>
//					</div>
//				);
//		}
	}
}