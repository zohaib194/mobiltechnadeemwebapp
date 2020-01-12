import React from "react";
import mobiles from "../../images/mobiles-banner.jpg";
export default class HomeBody extends React.Component {
	render() {
		return (
			<div className="HomeBody">
				<img src={mobiles} alt="picture of mobiles"></img>
			</div>
		);
	}
}
