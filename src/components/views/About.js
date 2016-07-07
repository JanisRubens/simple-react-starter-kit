import React from "react";
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
			slides: [General,HowToUse,FolderStructure,Author]
		};
	}

	nextSlide() {
		const size = this.state.slides.length;
		if ((this.state.currentSlide % size) !== 0) {
			this.setState({
				currentSlide: this.state.currentSlide + 1
			})
		}
	}

	prevSlide() {
		if (this.state.currentSlide !== 1) {
			this.setState({
				currentSlide: this.state.currentSlide - 1
			})
		}
	}
	
	render() {
		const SlideName = this.state.slides[this.state.currentSlide - 1];

		return (
			<div>
				<Controls next = { this.nextSlide.bind(this) }
						  prev = { this.prevSlide.bind(this) }
						  current = { this.state.currentSlide }
						  arr = { this.state.slides }
				></Controls>
				<SlideName/>
			</div>
		);
	}
}