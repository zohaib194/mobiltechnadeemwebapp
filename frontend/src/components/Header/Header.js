import React from "react";
import "../Header/Header.css";

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.onClickShowSearchField = this.onClickShowSearchField.bind(this);
		this.getSearchFieldForm = this.getSearchFieldForm.bind(this);
		this.onClickShowMenu = this.onClickShowMenu.bind(this);
		this.getMenuItems = this.getMenuItems.bind(this);

		this.state = {
			showMenu: false,
			showSearch: false
		};
	}

	onClickShowSearchField() {
		var searchButton = document.getElementsByClassName("Search")[0];

		if (this.state.showSearch) {
			searchButton.className = "Search Search-active";
			//searchButton.style.display = "inline-block";

			this.setState({
				showSearch: false
			});
		} else {
			searchButton.className = "Search Search-inactive";
			//searchButton.style.display = "none";

			this.setState({
				showSearch: true
			});
		}
	}

	getSearchFieldForm() {
		return (
			<form className="SearchForm" action="">
				<a id="navbarLeftElement" className="SearchSubmit" href="/">
					<span className="navbarSearchIcon">
						<i className="fa fa-search" />
					</span>
				</a>
				<input
					id="navbarLeftElement"
					type="text"
					className="navbarSearchField"
					placeholder="Søk"
				/>
				<a
					id="navbarLeftElement"
					className="Close"
					href="#"
					onClick={this.onClickShowSearchField}
				>
					<span className="navbarCloseIcon">
						<i className="fa fa-close" />
					</span>
				</a>
			</form>
		);
	}

	onClickShowMenu() {
		if (this.state.showMenu) {
			this.setState({
				showMenu: false
			});
		} else {
			this.setState({
				showMenu: true
			});
		}
	}

	getMenuItems() {
		return (
			<div id="menu">
				<div id="navbarBottomElement">
					<a className="navbarBrands" href="/brands">
						<b>Merker</b>
					</a>

					<div id="brands">
						<ul>
							<li> Apple </li>
							<li> Samsung </li>
							<li> Huwaei </li>
						</ul>
					</div>
				</div>

				<a id="navbarBottomElement" className="navbarProducts" href="/products">
					<b>Produkter</b>
				</a>
				<a id="navbarBottomElement" className="navbarContact" href="/contact">
					<b>Contact</b>
				</a>
			</div>
		);
	}

	render() {
		if (this.state.showSearch) {
			var searchForm = this.getSearchFieldForm();
		}

		if (this.state.showMenu) {
			var menu = this.getMenuItems();
		}

		return (
			<div>
				<div className="navbar">
					<div id="navbarSides" className="navbarLeft">
						<a
							id="navbarLeftElement"
							className="Search"
							href="#"
							onClick={this.onClickShowSearchField}
						>
							<span id="navbarSearch" className="navbarSearch">
								{" "}
								Søk{" "}
							</span>
							<span className="navbarSearchIcon">
								<i className="fa fa-search" />
							</span>
						</a>
						{searchForm}
					</div>
					<div id="navbarSides" className="navbarMid">
						<img
							src="https://thumbs.dreamstime.com/b/mobile-phone-vector-logo-template-concept-illustration-smartphone-creative-sign-modern-technology-cellphone-symbol-tablet-pc-icon-88017136.jpg"
							alt="Mobil Tech"
							height="42"
							width="42"
						/>
					</div>
					<div id="navbarSides" className="navbarRight">
						<a
							id="navbarRightElement"
							className="Menu"
							href="#"
							onClick={this.onClickShowMenu}
						>
							<span className="navbarMenu"> Meny </span>
							<span className="btnMenu">
								<i className="fa fa-bars" />
							</span>
						</a>

						<a id="navbarRightElement" className="Profile" href="/">
							<span className="navbarProfile"> Min profil </span>
							<span className="btnMenu">
								<i className="fa fa-user-o" />
							</span>
						</a>
					</div>
				</div>
				<div id="navbarSides">{menu}</div>
			</div>
		);
	}
}
