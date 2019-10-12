import React from "react";
import Header from "../Header/Header";
import Header2 from "../Header2/Header2";
import HomeBody from "../HomeBody/HomeBody";

export default class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<Header />
				<HomeBody />
			</div>
		);
	}
}
