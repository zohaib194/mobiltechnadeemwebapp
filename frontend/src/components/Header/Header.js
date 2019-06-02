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
				<div id="navbarBottomElement" className="navbarRepair">
					<a id="navbarBottomElement" href="/repair">
						<b>Reperasjon</b>
					</a>

					<div id="repair">
						<ul className="unordList">
							<li>
								<a id="navbarBottomElement" href="/repair/apple"> Apple </a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/repair/samsung"> Samsung </a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/repair/huwaei"> Huwaei </a>
							</li>
						</ul>
					</div>
				</div>

				<div id="navbarBottomElement" className="navbarSpareParts">
					<a id="navbarBottomElement" className="navbarSpareParts" href="/spareparts">
						<b>Reservedeler</b>
					</a>

					<div id="spareParts">
						<ul className="unordList">
							<li>
								<a id="navbarBottomElement" href="/spareparts/lcd"> LCD skjerm </a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/spareparts/backglass"> Bakglass </a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/spareparts/cameras"> Front/Back kamera </a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/spareparts/battery"> Batteri </a>
							</li>

						</ul>
					</div>
				</div>

				<div id="navbarBottomElement" className="navbarAccessories">
					<a id="navbarBottomElement" className="navbarAccessories" href="/accessories">
						<b>Tilbehør</b>
					</a>

					<div id="accessories">
						<ul className="unordList">
							<li>
								<a id="navbarBottomElement" href="/accessories/screenprotector"> Skjermbeskytter</a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/accessories/charger"> Lader </a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/accessories/cabels"> USB kabler </a>
							</li>
							<li>
								<a id="navbarBottomElement" href="/accessories/earbuds"> Ørepropper </a>
							</li>
						</ul>
					</div>

				</div>


				<div id="navbarBottomElement" className="navbarAccessories">

					<a id="navbarBottomElement" className="navbarContact" href="/help">
						<b>Hjelp</b>
					</a>

					<ul className="unordList">
						<li>
							<a id="navbarBottomElement" href="/help/billing"> Faktura </a>
						</li>
						<li>
							<a id="navbarBottomElement" href="/help/customerservice"> Kundeservice </a>
						</li>
						<li>
							<a id="navbarBottomElement" href="/help/gdpr"> GDPR </a>
						</li>
						<li>
							<a id="navbarBottomElement" href="/help/contact"> Kontakt oss </a>
						</li>
					</ul>
				</div>
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


						<p className="home-title">
							<span><b> Mobil <i className="fa fa-mobile-phone" /> Tech </b></span>
							<span><b> Nadeem </b> </span>
						</p>
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
