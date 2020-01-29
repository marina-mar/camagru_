import React, { Component } from 'react';

/*setup the context provider*/
const UserContext = React.createContext();

// Context Provider Component
//  will store, in its state, the data we need
class UserProvider extends Component {
	state = {
		isLoggedIn: true,
		userData: {
			userName: "mcouto",
			userId: 3,
			firstName: "Marina",
			lastName: "Couto",
			emailAddress: "marinamacc@hotmail.com"
		}
	};

	render () {
		return (
			<UserContext.Provider value={this.state}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer, UserContext };