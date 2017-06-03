import { h, Component } from 'preact';
import {connect} from 'preact-redux';
import style from './style.less';

import {addChatLine} from '../../lib/actions/chat';

import UsernameInput from '../username-input';
import ChatRoom from '../chat-room';
import ChatInput from '../chat-input';

class ChatContainer extends Component {
	render() {
		return (
			<div class={style.container}>
				<div>
					<UsernameInput />
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
		addChatLine: (chatroomId, sender, timestamp, body) => {
			dispatch(addChatLine(chatroomId, sender, timestamp, body));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
