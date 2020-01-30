import React, { Component } from 'react';

/* stickers */
import {photoStickers} from "../LocalData/stickers";
/*setup the context provider*/
const UserContext = React.createContext();

// Context Provider Component
//  will store, in its state, the data we need
class UserProvider extends Component {
	addPic = (newPic) => {
		this.setState({
			allPics: [...this.state.allPics,
				{
					imageData: newPic,
					index: this.totalPics
				}],
			totalPics: this.state.totalPics + 1
		});
	};

	state = {
		isLoggedIn: true,
		photoStickers: photoStickers,
		userData: {
			userName: "mcouto",
			userId: 3,
			firstName: "Marina",
			lastName: "Couto",
			emailAddress: "marinamacc@hotmail.com"
		},
		totalPics: 0,
		allPics: [],
		addPic: this.addPic
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