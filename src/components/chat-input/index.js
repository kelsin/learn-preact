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
		this.keyPress = this.keyPress.bind(this);
	}

	inputChange(event) {
		this.setState({
			msg: event.target.value
		});
	}

	keyPress(event) {
		if (event.key === "Enter") {
			this.send();
		}
	}

	send() {
		this.props.addChatLine(this.props.chatroomId, this.props.userId, new Date(), this.state.msg);
		this.setState({
			msg: ''
		});
	}

	render() {
		return (
			<div class={style.container}>
				<input type='text' class={style.input} value={this.state.msg} onKeyPress={this.keyPress} onInput={this.inputChange} />
				<button type='button' class={style.button} onClick={this.send}>Send</button>
			</div>
		);
	}
}
