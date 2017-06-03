import { h, Component } from 'preact';
import {connect} from 'preact-redux';
import style from './style.less';

import {addChatroom, deleteChatroom} from '../../lib/actions/chatroom';

export default class ChatList extends Component {
	render() {
		let chatroomsJsx = this.props.chatrooms.map((room) => {
			return (
				<li class={style.chatroomListItem}>
					{room.name}
				</li>
			)
		});

		return (
			<ul class={style.chatroomList}>
				{chatroomsJsx}
			</ul>
		);
	}
}