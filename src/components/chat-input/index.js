import { h, Component } from 'preact';
import style from './style.less';
import moment from 'moment';

/**
 *
 * TODO
 * - dispatch send chat event and let reducer handle the rest
 * - add bash-like shortcuts (prev, next, clear, goto-end, goto-start)
 *
 */
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
	}

	inputChange(event) {
		this.setState({
			msg: event.target.value
		});
	}

	keyPress(event) {
		switch (event.code) {
			case 'Enter':
				this.send();
				break;
		}
	}

	send() {
		const msg = {
			chatroomId: this.props.chatroomId,
			sender: this.props.userId,
			timestamp: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
			body: this.state.msg
		}
		this.props.addChatLine(msg);
		this.setState({
			msg: ''
		});
	}

	render() {
		return (
				<div class={style.container}>
				<input type='text' disabled={this.props.disabled} class={style.input} value={this.state.msg} onKeyPress={this.keyPress} onInput={this.inputChange} />
				<button type='button' class={style.button} onClick={this.send}>Send</button>
				</div>
		);
	}
}
