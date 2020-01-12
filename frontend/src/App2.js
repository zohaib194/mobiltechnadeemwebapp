import React from "react";
import "app2.css";

import { render } from "react-dom";

class App2 extends React.Component {
	render() {
		return (
			<div className="app2-Grid">
				<div className="navBar">{/* header goes here */}</div>
				<div className="slidshow">{/* slideshow goes here */}</div>
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

export default App2;
