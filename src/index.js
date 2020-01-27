import React from 'react';
import ReactDOM from 'react-dom';

/*To handle multiple pages */
import {BrowserRouter as Router} from "react-router-dom";
/* get context */
import { UserProvider } from './userContext';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<UserProvider>
		<Router>
			<App />
		</Router>
	</UserProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
