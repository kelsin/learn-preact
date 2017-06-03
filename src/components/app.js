import { Provider, connect } from 'preact-redux';
import { h, Component } from 'preact';
import { createStore } from 'redux';
import { Router } from 'preact-router';

import reducers from '../lib/reducers';
import initialState from '../lib/initState';
import { addChatLine, deleteChatLine } from '../lib/actions/chat';
import { addUser, deleteUser } from '../lib/actions/user';

import Header from './header';
import Home from './home';
import Profile from './profile';

let store = createStore(reducers, initialState);

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
			<Provider store={store}>
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</Provider>
			});
			</div>
		);
	}
}
