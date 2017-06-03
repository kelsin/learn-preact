import { h, Component } from 'preact';
import style from './style.less';
import clone from 'lodash/clone';

export default class ChatMessages extends Component {
	constructor() {
		super();

		this.state = {
			messages: []
		}
	}

	componentDidMount() {
		setInterval(() => {
			let newMsg = {
				sender: 'TestUser',
				body: 'TestMsg ' + (Math.random() * 10),
				timestamp: new Date()
			};
			let stateObject = clone(this.state);
			stateObject.messages.push(newMsg);
			this.setState(stateObject);
			console.log(newMsg);
		}, 500);
	}

	render(props, state) {
		let messageJsx = state.messages.map((msg) => {
			return (
				<div class={style.msgContainer}>
					<div class={style.sender}>{msg.sender}</div>
					<div class={style.body}>{msg.body}</div>
					<div class={style.timestamp}>{msg.timestamp}</div>
				</div>
			)
		});

		return (
			<div class={style.chatMessages}>
				{messageJsx}
			</div>
		);
	}
}
