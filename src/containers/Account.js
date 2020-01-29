import React, { Component } from "react";
import "../style/Pages.style.css";
import {UserContext} from "../context/userContext";

/* to sign in */
import Login from "./Login";
import GetToSignUp from "../components/getToSignUp";
/*to sign up*/
import SignUp from "./SignUp";
/*to account details*/
import AccountDetails from "./AccountDetails";

export default class Account extends Component {
	render () {
		if (this.context.isLoggedIn === true)
		{
			return (
				<div className="accountPage">
					<AccountDetails />
				</div>
			);
		}
		else if (this.context.isLoggedIn === false && this.context.signingUp === true)
		{
			return (
				<div className="signUpPage">
					<SignUp />
				</div>
			);
		}
		return (
			<div className="accountPage">
				<GetToSignUp />
				<Login />
			</div>
		);

	}
}

Account.contextType = UserContext;