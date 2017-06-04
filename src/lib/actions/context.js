import { SET_CURRENT_CHATROOM, SET_CURRENT_USER } from './types';

function setCurrentChatroom(chatroomId) {
	return {
		type: SET_CURRENT_CHATROOM,
		chatroomId
	}
}

function setCurrentUser(userId) {
	return {
		type: SET_CURRENT_USER,
		userId
	}
}

export { setCurrentChatroom, setCurrentUser };
