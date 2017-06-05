import { h, Component } from 'preact';
import style from './style.less';
import moment from 'moment';
import keyjs from 'keyboardjs';
import { chatInput as chatInputKeybinds } from '../../config/defaults/keybinds';
import bashReadlineCommands from '../../lib/bashReadlineCommands';
import _ from 'lodash';

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
		};

		this.send = this.send.bind(this);
		this.onInput = this.onInput.bind(this);

		// chat input keybinds
		keyjs.setContext('chat-input');
		// bind each key to their commands
		// TODO: maybe moar magic? too much manual setup here
		_.each(chatInputKeybinds, (command, keybind) => {
			// get bash command fn
			const bashCommandFn = bashReadlineCommands[command];
			// bind to key
			keyjs.bind(keybind, (e) => {
				e.preventDefault();
				// get bash command fn output
				const { msg, caretStart, caretEnd } =
					bashCommandFn(
						this.state.msg,
						e.target.selectionStart,
						e.target.selectionEnd
					);
				// set new output
				this.setState({ msg }, () => {
					e.target.selectionStart = caretStart;
					e.target.selectionEnd = caretEnd;
				});
			});
		});
		// reset context
		keyjs.setContext('global');
	}

	onFocus(event) {
		keyjs.setContext('chat-input');
	}

	onBlur(event) {
		// reset context
		keyjs.setContext('global');
	}

	onInput(event) {
		this.setState({
			msg: event.target.value
		});
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
				<input type='text' disabled={this.props.disabled} class={style.input} value={this.state.msg} onInput={this.onInput} onFocus={this.onFocus} onBlur={this.onBlur} />
				<button type='button' class={style.button} onClick={this.send}>Send</button>
				</div>
		);
	}
}
