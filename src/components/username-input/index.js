import { h, Component } from 'preact';
import SocketClient from '../../lib/SocketClient';
import style from './style.less';

export default class UsernameInput extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			usernameIsSet: false
		}

		this.inputChange = this.inputChange.bind(this);
		this.setName = this.setName.bind(this);
		this.keyPress = this.keyPress.bind(this);
	}

	inputChange(event) {
		this.setState({
			username: event.target.value
		});
	}

	keyPress(event) {
		if (event.key === "Enter") {
			this.setName();
		}
	}

	setName() {
		this.props.addUser(this.state.username);
		this.setState({
			usernameIsSet: true
		});
	}

	render() {
		let usernameJSX = function() {
			if(!this.state.usernameIsSet) {
				return (
					<div>
						<input type='text' class={style.input} value={this.state.username} onKeyPress={this.keyPress} onInput={this.inputChange} />
						<button type='button' class={style.button} onClick={this.setName}>Send</button>
					</div>
				)
			} else {
				return (
					<h3 class={style.username}>{this.state.username}</h3>
				)
			}
		}
		return (
			<div class={style.container}>
				{usernameJSX}
			</div>
		);
	}
}
