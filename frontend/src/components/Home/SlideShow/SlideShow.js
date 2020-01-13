import React from "react";
import "components/Home/SlideShow/SlideShow.css";
require("dotenv").config();

export default class SlideShow extends React.Component {
	////////////////////////////////
	/////// Lifecycle Methods //////
	////////////////////////////////
	constructor(props) {
		super(props);

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
		return (
			<div>
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
				<div className="dotsClass">
					<span className="dot"></span>
					<span className="dot"></span>
					<span className="dot"></span>
				</div>
			</div>
		);
	}
	////////////////////////////////
	/////// Internal Methods ///////
	////////////////////////////////
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
