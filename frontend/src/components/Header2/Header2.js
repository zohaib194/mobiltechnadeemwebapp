import React from "react";
import "./Header2.css";
export default class Header2 extends React.Component {
	constructor(props) {
		super(props);

		this.slideUp = this.slideUp.bind(this);
		this.slideDown = this.slideDown.bind(this);
	}
	slideUp(el) {
		var elem = document.getElementById(el);
		elem.style.transition = "all 2s ease-in-out";
		elem.style.height = "0px";
	}
	slideDown(el) {
		var elem = document.getElementById(el);
		elem.style.transition = "all 2s ease-in-out";
		elem.style.height = "400px";
	}
	render() {
		return (
			<div className="Header">
				<div className="Slider"></div>
				<div className="DropDown">
					<div id="box">Hello i am a box and i will show and hide</div>
					<button onClick={this.slideUp}>Slide Up</button>
					<button onClick={this.slideDown}>Slide Down</button>
				</div>
			</div>
		);
	}
}
