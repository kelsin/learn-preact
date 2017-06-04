import { h, Component } from 'preact';
import SocketClient from '../../lib/SocketClient';
import style from './style.less';
import * as Guid from 'guid';

export default class UsernameInput extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			usernameIsSet: false
		};

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
		let userId = Guid.create().value;
		this.props.addUser(this.state.username, userId);
		this.props.setCurrentUser(userId);

		this.setState({
			usernameIsSet: true
		});
	}

	render() {
		if (this.state.usernameIsSet) {
			return <h3 class={style.username}>{this.state.username}</h3>;
		} else {
			return (
				<div class={style.container}>
					<h1 class={style.title}>Coolest Mothaflippin Chat</h1>
					<div class={style.username}>{this.state.username}</div>
					<div>
						<input type='text' placeholder="Who are you?" class={style.input} value={this.state.username} onKeyPress={this.keyPress} onInput={this.inputChange} />
						<button type='button' class={style.button} onClick={this.setName}>Set Username</button>
					</div>
				</div>
			);
		}
	}
}
