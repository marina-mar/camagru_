import React, { Component } from "react";
import "../style/smallComponents.css";
import {UserContext} from "../userContext";

class Login extends Component {
	render () {
		return (
		<div className="login">
			<form>
				USERNAME <br />
				<input type="text" name="usrn" required/> <br /><br />
				PASSWORD <br />
				<input type="password" name="psrd" required/><br />
				<button className="go" type="submit"> GO ! </button>
				<p>Forgot your password?</p>
			</form>
		</div>
		);
	}
}

Login.contextType = UserContext;
export default Login;