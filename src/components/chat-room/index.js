import { h, Component } from 'preact';
import style from './style.less';
import clone from 'lodash/clone';

import ChatMessage from '../chat-message';

export default class ChatRoom extends Component {
	constructor() {
		super();
		this.getUsername = this.getUsername.bind(this);
	}
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
				<ChatMessage type={msg.messageType} msg={msg} getUsername={this.getUsername}></ChatMessage>
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
