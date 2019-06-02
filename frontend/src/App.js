import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="body">
					<Route path="/" component={Home} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
