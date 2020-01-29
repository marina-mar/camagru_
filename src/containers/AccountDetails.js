import React, { Component, useState } from "react";
import "../style/smallComponents.css";
import { UserContext } from "../context/userContext";
/* Option Components */
import AccountOption from "./AccountOption";
import DeleteOption from "./DeleteOption";

export default class AccountDetails extends Component {
	render () {
		return (
			<div className="accountDetails">
				<p>Hello, {this.context.userData.userName} , do you want to change one of those?</p>
				{/* each of the options suffer onclick event changes */}
				<AccountOption item={"Username"} userData={this.context.userData.userName}/>
				<AccountOption item={"First Name"} userData={this.context.userData.firstName}/>
				<AccountOption item={"Last Name"} userData={this.context.userData.lastName}/>
				<AccountOption item={"Email Address"} userData={this.context.userData.emailAddress}/>
				<AccountOption item={"Password"} />
				Or... do you want to delete your account?
				<DeleteOption />
			</div>
	);
	}
}

AccountDetails.contextType = UserContext;