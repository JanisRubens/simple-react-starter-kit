import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Controls from '../shared/Controls';
import General from "./aboutViews/General";
import Author from "./aboutViews/Author";
import HowToUse from "./aboutViews/HowToUse";
import FolderStructure from "./aboutViews/FolderStructure";

import '../../assets/stylesheets/components/about.scss';

export default class About extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			animation: "slide-animation-next",
			currentSlide: 0,
			slides: [ General, HowToUse, FolderStructure, Author ]
		};
	}

	nextSlide() {
		const size = this.state.slides.length;
		if (this.state.currentSlide < size - 1 ) {
			this.setState({
				animation: "slide-animation-next",
				currentSlide: this.state.currentSlide + 1
			})
		}
	}

	prevSlide() {
		if (this.state.currentSlide !== 0) {
			this.setState({
				animation: "slide-animation-prev",
				currentSlide: this.state.currentSlide - 1
			})
		}
	}
	
	goTo( index ) {
		if (index > this.state.currentSlide) {
			this.setState({
				animation: "slide-animation-next",
				currentSlide: index
			})
		} 
		else {
			this.setState({
				animation: "slide-animation-prev",
				currentSlide: index
			})
		}
	}
	
	render() {
		const SlideName = this.state.slides[ this.state.currentSlide ];
		const transitionName = this.state.animation;

		return (
			<div className="about-wrapper">
				<Controls next = { this.nextSlide.bind(this) }
						  prev = { this.prevSlide.bind(this) }
						  current = { this.state.currentSlide }
						  arr = { this.state.slides }
						  callback = {this.goTo.bind(this)}
				></Controls>
				<ReactCSSTransitionGroup component="div" className="animated-slides" transitionName={transitionName} transitionEnterTimeout={700} transitionLeaveTimeout={700}>
				<SlideName key={this.state.currentSlide}/>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}