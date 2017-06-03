import { h, Component } from 'preact';
import SocketClient from '../../lib/SocketClient';
import style from './style.less';

export default class ChatInput extends Component {
	constructor() {
		super();

		this.state = {
			msg: ''
		}

		this.inputChange = this.inputChange.bind(this);
		this.send = this.send.bind(this);
	}

	inputChange(event) {
		this.setState({
			msg: event.target.value
		});
		console.log('INPUT CHANGE', this.state);
	}

	send() {
		// TODO: call reducer instead and have the redux store send the socket message
		SocketClient.sendMessage(this.state.msg);
	}

	render(props, state) {
		return (
			<div class={style.container}>
				<input type='text' class={style.input} value={state.msg} onInput={this.inputChange} />
				<button type='button' class={style.button} onClick={this.send}>Send</button>
			</div>
		);
	}
}
