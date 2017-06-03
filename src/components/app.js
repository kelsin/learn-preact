import { Provider, connect } from 'preact-redux';
import { h, Component } from 'preact';
import { createStore } from 'redux';
import { Router } from 'preact-router';

import reducers from '../lib/reducers';
import initialState from '../lib/initState';
import { addChatLine } from '../lib/actions/chat';

import Header from './header';
import ChatContainer from './chat-container';
import Profile from './profile';

let store = createStore(reducers, initialState);

store.dispatch(addChatLine(1, Math.floor(Date.now() / 1000), 'Hello everyone!'));

console.log(store.getState(), '???');
console.log('hi');

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

				<ChatContainer />
			</Provider>
			</div>
		);
	}
}
