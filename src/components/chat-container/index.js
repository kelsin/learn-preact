import { h, Component } from 'preact';
import {connect} from 'preact-redux';
import style from './style.less';

import SocketClient from '../../lib/SocketClient';
import {addChatLine, addChatLineFromServer} from '../../lib/actions/chat';

import UsernameInput from '../username-input';
import ChatRoom from '../chat-room';
import ChatroomList from '../chatroom-list';
import ChatInput from '../chat-input';

class ChatContainer extends Component {
	componentWillMount() {
		SocketClient.onMessageReceived('chat message', (msg) => {
			this.props.addChatLineFromServer(msg);
		});
	}

	render() {
		return (
			<div class={style.container}>
				<div>
					<UsernameInput />
				</div>
				<div class={style.chatRoomListContainer}>
					<ChatroomList chatrooms={this.props.chatrooms}/>
				</div>
				<div class={style.messagesContainer}>
					<ChatRoom chatroomId={this.props.defaultChatroom} users={this.props.users} chatrooms={this.props.chatrooms}/>
				</div>
				<div class={style.inputContainer}>
					<ChatInput addChatLine={this.props.addChatLine} chatroomId={this.props.defaultChatroom} userId={this.props.defaultUser}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		chatrooms: state.chatrooms,
		users: state.users,
		defaultChatroom: state.context.chatroomId,
		defaultUser: state.context.userId
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addChatLine: (msg) => {
			dispatch(addChatLine(msg));
		},
		addChatLineFromServer: (msg) => {
			dispatch(addChatLineFromServer(msg));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
