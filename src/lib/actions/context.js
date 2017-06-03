import { SET_CURRENT_CHATROOM } from './types';

function setCurrentChatroom(chatroomId) {
	return {
		type: SET_CURRENT_CHATROOM,
		chatroomId
	}
}

export { setCurrentChatroom };
