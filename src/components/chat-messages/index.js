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

	render(props, state) {
		let messageJsx = state.messages.map((msg) => {
			return (
				<div class={style.message}>
					<div class={style.sender}>{msg.sender}</div>
					<div class={style.body}>{msg.body}</div>
					<div class={style.timestamp}>{msg.timestamp.getTime()}</div>
				</div>
			)
		});

		return (
			<div class={style.container}>
				{messageJsx}
			</div>
		);
	}
}
