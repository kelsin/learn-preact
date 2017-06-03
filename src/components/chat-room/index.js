import { h, Component } from 'preact';
import style from './style.less';
import clone from 'lodash/clone';

export default class ChatRoom extends Component {
	getUsername(userId) {
		return this.props.users.find(({id}) => (id === userId)).username;
	}
	render() {
		let chatroom = this.props.chatrooms.find((room) =>
			(room.id === this.props.chatroomId)
		);

		let messageJsx = chatroom.chat.map((msg) => {
			return (
				<div class={style.message}>
					<div class={style.sender}>{this.getUsername(msg.sender)}</div>
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
