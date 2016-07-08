import React from "react";
import '../../assets/stylesheets/components/shared/controls.scss';


export default class Controls extends React.Component {
	
	renderCoins( arr, current, callback ) {
		if (arr.length > 0) {      
			return arr.map(function(item, index){
				if ( index === current )
					return  <span className="active" key = { index } > ACTIVE{ index } </span>
					else 
					return   <span key = { index } onClick = { callback.bind(this, index) } > OPTION{ index } </span>
			});

		}
		else return [];
	}

	render() {
		const coins = this.renderCoins( this.props.arr, this.props.current, this.props.callback.bind(this) );
		return (
			<div className="controlls">
			<span className="prev" onClick={ this.props.prev.bind(this) } >prev</span>
			<div className="coins">
				{coins}
				</div>
				<span className="next"  onClick={ this.props.next.bind(this) } >next</span>
					</div>
				);
}
}