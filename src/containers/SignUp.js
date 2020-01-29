import React, { Component } from "react";
import "../style/Pages.style.css"
import { UserContext } from "../context/userContext";

class SignUp extends Component {
	render () {
		return (
			<div className="accountPage">
				<div className="signUpPage">
					<div className="topSignUp"> Time to create your account! </div>
					<form>
						<table>
							<tr>
								<td>
									Your first name is... <br />
									<input className="signUpInput" type="text" name="firstName" required/>
								</td>
								<td>
									we need your last name too!<br />
									<input className="signUpInput" type="text" name="lastName" required/>
								</td>
							</tr>
							<tr>
								<td>
									any good nicknames for the username?? <br />
									<input className="signUpInput" type="text" name="username" required/>
								</td>
								<td>
									your good old email address go here:<br />
									<input className="signUpInput" type="text" name="email" required/>
								</td>
							</tr>
						<tr >
							<td>When were you born???<br />
							<input className="signUpInput" type="date" name="bithday" required/>
							</td>
							<td>
								now, your super secret password<br />
								<input className="signUpInput" type="password" name="email" required/>
							</td>
						</tr>
					</table>
						<button className="go" type="submit">create!</button>
					</form>
				</div>
			</div>
		);
	}
}

SignUp.contextType = UserContext;
export default SignUp;