import { h, Component } from 'preact';
import {connect} from 'preact-redux';
import style from './style.less';

import SocketClient from '../../lib/SocketClient';
import {addUser} from '../../lib/actions/user';
import {addChatLine, addChatLineFromServer} from '../../lib/actions/chat';
import {setCurrentUser} from '../../lib/actions/context';

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
					<UsernameInput addUser={this.props.addUser} setCurrentUser={this.props.setCurrentUser} />
				</div>
				<div class={style.chatRoomListContainer}>
					<ChatroomList chatrooms={this.props.chatrooms}/>
				</div>
				<div class={style.messagesContainer}>
					<ChatRoom chatroomId={this.props.defaultChatroom} users={this.props.users} chatrooms={this.props.chatrooms}/>
				</div>
				<div class={style.inputContainer}>
					<ChatInput addChatLine={this.props.addChatLine} chatroomId={this.props.defaultChatroom} userId={this.props.currentUser}/>
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
		currentUser: state.context.currentUserId
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
<<<<<<< HEAD
		addChatLine: (chatroomId, sender, timestamp, body) => {
			dispatch(addChatLine(chatroomId, sender, timestamp, body));
		},
		addUser: (username, id) => {
			dispatch(addUser(username, id));
		},
		setCurrentUser: (userId) => {
			dispatch(setCurrentUser(userId));
=======
		addChatLine: (msg) => {
			dispatch(addChatLine(msg));
		},
		addChatLineFromServer: (msg) => {
			dispatch(addChatLineFromServer(msg));
>>>>>>> 8d33ac2e4d9e1f0693d0c15cf0d10cf23cccb749
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
