import React, { Component } from "react";
import "../style/smallComponents.css";

class GetToSignUp extends Component {
	render () {
		return (
			<div className="getToSignUp">
				<p>Don't have an account yet???</p>
				<a className="signUpButton"  href="/signup"> SIGN UP NOW! </a>
				<br />
			</div>
		);
	}
}

export default GetToSignUp;