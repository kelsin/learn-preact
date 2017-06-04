import { h, Component } from 'preact';
import style from './style.less';
import clone from 'lodash/clone';

export default class ChatRoom extends Component {
	getUsername(userId) {
		let user = this.props.users.find(({id}) => (id === userId));
		let username = user ? user.username : 'null';
		return username;
	}
	render() {
		let chatroom = this.props.chatrooms.find((room) =>
			(room.id === this.props.chatroomId)
		);

		let messageJsx = chatroom.chat.map((msg) => {
			console.log('ehehhhh')
			return (
				<div class={style.message}>
					<div class={style.sender}>{this.getUsername(msg.sender)}</div>
					<div class={style.body}>{msg.body}</div>
					<div class={style.timestamp}>{msg.timestamp}</div>
				</div>
			)
		});

		return (
			<div class={style.container}>
				{messageJsx}
			</div>
		);
	}
	componentDidUpdate() {
		let chatroomContainer = document.querySelector('.' + style.container);
		chatroomContainer.scrollTop = chatroomContainer.scrollHeight;
	}
}
