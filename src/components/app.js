import { Provider } from 'preact-redux';
import { h, Component } from 'preact';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../lib/reducers';
import initialState from '../lib/initState';
import CommandMiddleware from '../lib/middleware/command';

import ChatContainer from './chat-container';

let store = createStore(
	reducers,
	initialState,
	applyMiddleware(
		CommandMiddleware
	)
);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<ChatContainer />
				</div>
			</Provider>
		);
	}
}
