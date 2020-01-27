import React, { Component } from "react";
import "../style/smallComponents.css";
import {UserContext} from "../userContext";

export default class AccountDetails extends Component {
	render() {
		return (
			<div className="accountDetails">
			</div>
		);
	}
}

AccountDetails.context = UserContext;