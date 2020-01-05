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
		var menuButton = document.getElementsByClassName("fa fa-bars")[0];
		var closeButton = document.getElementsByClassName("fa fa-close")[0];

		if (this.state.showMenu) {
			menuButton.className = "fa fa-bars active";
			closeButton.className = "fa fa-close inactive";
			this.setState({
				showMenu: false
			});

		} else {
			menuButton.className = "fa fa-bars inactive";
			closeButton.className = "fa fa-close active";
			this.setState({
				showMenu: true
			});
		}
	}

	getMenuItems() {
		let transitionEffect = 'all .4s ease-in-out';
		let divHeight;

		if(this.state.showMenu){
			divHeight = '10em';
		} else {
			divHeight = '0em';
		}
		const divStyle = {
		  transition: transitionEffect,
		  height: divHeight,
		  overflow: 'hidden',
		};
		return (

			<div id="menu" style={divStyle}>
				<div id="navbarBottomElement" className="navbarBrands">
					<a className="navbarBrands" href="/brands">
						<b>Merker</b>
					</a>

					<div id="brands">
						<ul className="unordList">
							<li>
								<a href="/brands/apple"> Apple </a>
							</li>
							<li>
								<a href="/brands/samsung"> Samsung </a>
							</li>
							<li>
								<a href="/brands/huwaei"> Huwaei </a>
							</li>
						</ul>
					</div>
				</div>

				<div id="navbarBottomElement" className="navbarSpareParts">
					<a className="navbarSpareParts" href="/spareparts">
						<b>Reservedeler</b>
					</a>

					<div id="spareParts">
						<ul className="unordList">
							<li>
								<a href="/spareparts/lcd"> LCD skjerm </a>
							</li>
							<li>
								<a href="/spareparts/backglass"> Bakglass </a>
							</li>
							<li>
								<a href="/spareparts/cameras"> Front/Back kamera </a>
							</li>
							<li>
								<a href="/spareparts/battery"> Batteri </a>
							</li>

						</ul>
					</div>
				</div>

				<div id="navbarBottomElement" className="navbarAccessories">
					<a className="navbarAccessories" href="/accessories">
						<b>Tilbehør</b>
					</a>

					<div id="accessories">
						<ul className="unordList">
							<li>
								<a href="/accessories/screenprotector"> Skjermbeskytter</a>
							</li>
							<li>
								<a href="/accessories/charger"> Lader </a>
							</li>
							<li>
								<a href="/accessories/cabels"> USB kabler </a>
							</li>
							<li>
								<a href="/accessories/earbuds"> Ørepropper </a>
							</li>
						</ul>
					</div>

				</div>


				<div id="navbarBottomElement" className="navbarAccessories">

					<a className="navbarContact" href="/help">
						<b>Hjelp</b>
					</a>

					<ul className="unordList">
						<li>
							<a href="/help/billing"> Faktura </a>
						</li>
						<li>
							<a href="/help/customerservice"> Kundeservice </a>
						</li>
						<li>
							<a href="/help/gdpr"> GDPR </a>
						</li>
						<li>
							<a href="/help/contact"> Kontakt oss </a>
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

		var menu = this.getMenuItems();

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
								<i className="fa fa-bars active" />
								<i className="fa fa-close inactive" />
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
				<img
							src="https://s14415.pcdn.co/wp-content/resize/uploads/brandwatch/troll.jpg__w469"
							alt="Mobil Tech"
						/>
			</div>

		);
	}
}
