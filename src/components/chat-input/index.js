import { h, Component } from 'preact';
import SocketClient from '../../lib/SocketClient';
import style from './style.less';
import moment from 'moment';

export default class ChatInput extends Component {
	constructor() {
		super();

		this.state = {
			msg: '',
			disabled: true
		}

		this.inputChange = this.inputChange.bind(this);
		this.send = this.send.bind(this);
		this.keyPress = this.keyPress.bind(this);
		this.isDisabled = this.isDisabled.bind(this);
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
		this.props.addChatLine(this.props.chatroomId, this.props.userId, moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), this.state.msg);
		this.setState({
			msg: ''
		});
	}

	isDisabled() {
		console.log('help');
		if(this.props.userId !== '') {
			this.setState({
				disabled: false
			});
		} else {
			this.setState({
				disabled: true
			});
		}
	}

	render() {
		return (
			<div class={style.container}>
				<input type='text' disabled={this.state.disabled} class={style.input} value={this.state.msg} onKeyPress={this.keyPress} onInput={this.inputChange} />
				<button type='button' class={style.button} onClick={this.send}>Send</button>
			</div>
		);
	}
}
