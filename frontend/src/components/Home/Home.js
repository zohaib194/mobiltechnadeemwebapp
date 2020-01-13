import React from "react";
import Header from "components/Header/Header.js";
import SlideShow from "components/Home/SlideShow/SlideShow.js";
import "components/Home/Home.css";
require("dotenv").config();

export default class Home extends React.Component {
	////////////////////////////////
	/////// Lifecycle Methods //////
	////////////////////////////////
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="homePage-Grid">
				<div className="navBar">{/* header goes here */} <Header /></div>
				<div className="slidshow">{/* slideshow goes here */} <SlideShow /> </div>
				<div className="news">{/* news goes here */}</div>
				<div className="GoodsGrid">
					<div className="newGoods">{/* newGoods goes here */}</div>
					<div className="comingsoon">{/* commingsoon goes here */}</div>
				</div>
				<div className="Footer">
					<div className="footer">{/* footer goes here */}</div>
				</div>
			</div>
		);
	}
}
