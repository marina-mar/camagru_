import React, { Component } from "react";
import "../style/Navbar.style.css"
import { UserContext } from "../userContext";

class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.context.isLoggedIn === true)
		{
			return (
				<div id = "Navbar">
					<a className="NavbarGallery" href = "/"> Gallery </a>
					<a className="NavbarStudio" href = "/studio"> Studio </a>
					<a className="NavbarAccount" href = "/account"> Account </a>
				</div>
			);
		}
		return (
				<div id = "Navbar">
					<a className="NavbarGallery" href = "/"> Gallery </a>
					<a className="NavbarStudio" href = "/studio"> Studio </a>
					<a className="NavbarAccount" href = "/account"> Sign_In! </a>
				</div>
			);
		}
}

Navbar.contextType = UserContext;
export default Navbar;