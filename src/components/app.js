import { Provider } from 'preact-redux';
import { h, Component } from 'preact';
import { createStore } from 'redux';

import reducers from '../lib/reducers';
import initialState from '../lib/initState';

import ChatContainer from './chat-container';

let store = createStore(reducers, initialState);

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
