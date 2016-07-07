import React from "react";


export default class Controls extends React.Component {

	renderCoins( arr, current ) {
		if (arr.length > 0) {      
			return arr.map(function(item, index){
				if ( index === current )
					return  <span className="active" key={index} >{index}</span>
					else 
						return   <span key={index} >{index}</span>
			});

		}
		else return [];
	}

	render() {
		const coins = this.renderCoins( this.props.arr, this.props.current )
		return (
			<div className="controlls">
			<span onClick={ this.props.prev.bind(this) } >prev</span>
			<div className="coins">
				{coins}
				</div>
				<span onClick={ this.props.next.bind(this) } >next</span>
					</div>
				);
}
}