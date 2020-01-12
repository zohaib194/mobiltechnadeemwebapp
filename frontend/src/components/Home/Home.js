import React from "react";
import Header from "components/Header/Header.js";
import "components/Home/Home.css";
require("dotenv").config();

export default class Home extends React.Component {
	////////////////////////////////
	/////// Lifecycle Methods //////
	////////////////////////////////
	constructor(props) {
		super(props);

		this.getSlideShowImages = this.getSlideShowImages.bind(this);
		this.getSlideShowDots = this.getSlideShowDots.bind(this);
		this.showSlides = this.showSlides.bind(this);
		this.state = {
			slideIndex: 0,
			slideShowImages: [
				"/images/temporaryImages/image1.jpg",
				"/images/temporaryImages/image2.png",
				"/images/temporaryImages/image3.png"
			]
		};
	}
	componentDidMount() {
		this.showSlides();
	}

	render() {
		var slideShow = this.getSlideShowImages();
		var slideShowDots = this.getSlideShowDots();
		return (
			<div className="homePage-Grid">
				<div className="navBar">{/* header goes here */} <Header /></div>
				<div className="slidshow">{/* slideshow goes here */slideShow} {slideShowDots} {/* TODO: dots aren't showing up */} </div>
				<div className="news">{/* news goes here */}</div>
				<div className="GoodsGrid">
					<div className="newGoods">{/* newGoods goes here */}</div>
					<div className="comingsoon">{/* commingsoon goes here */}</div>
				</div>
				<div className="Footer">
					<div className="footer">{/* footer goes here */}</div>
				</div>
			</div>
			/*<div>
				
				{slideShow}
				{slideShowDots}
			</div>*/
		);
	}
	////////////////////////////////
	/////// Internal Methods ///////
	////////////////////////////////
	getSlideShowImages() {
		console.log(process.env.REACT_APP_PUBLIC_URL);
		const div = (
			<div className="slideshowContainer">
				<div className="mySlides fade">
					<div className="numbertext">1 / 3</div>
					<img className="slideShowImage" src={this.state.slideShowImages[0]} />
					<div className="text">Caption Text</div>
				</div>

				<div className="mySlides fade">
					<div className="numbertext">2 / 3</div>
					<img className="slideShowImage" src={this.state.slideShowImages[1]} />
					<div className="text">Caption Two</div>
				</div>

				<div className="mySlides fade">
					<div className="numbertext">3 / 3</div>
					<img className="slideShowImage" src={this.state.slideShowImages[2]} />
					<div className="text">Caption Three</div>
				</div>
			</div>
		);
		return div;
	}
	getSlideShowDots() {
		return (
			<div className="dotsClass">
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
			</div>
		);
	}

	showSlides() {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		this.state.slideIndex++;
		if (this.state.slideIndex > slides.length) {
			this.state.slideIndex = 1;
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" activeDot", "");
		}
		slides[this.state.slideIndex - 1].style.display = "block";
		dots[this.state.slideIndex - 1].className += " activeDot";
		setTimeout(this.showSlides, 5000); // Change image every 2 seconds
	}
}
