import {
	ADD_CHAT_LINE,
	DELETE_CHAT_LINE,
	ADD_USER_TO_CHATROOM,
	DELETE_USER_FROM_CHATROOM
} from "actions/types";

let chatroom = function(chatroom = {}, action) {
	switch (action.type) {
		case ADD_CHAT_LINE:
			// if (chatroom.id === action.chatroomId) {
				return {
					...chatroom,
					chat: [
						...chatroom.chat,
						{
							sender: action.sender,
							timestamp: action.timestamp,
							body: action.body,
							id: action.id
						}
					]
				};
			// } else {
			// 	return chatroom;
			// }
		case DELETE_CHAT_LINE:
			if (chatroom.id === action.chatroomId) {
				let newChatroom = Object.assign({}, chatroom);
				newChatroom.chat = newChatroom.chat.filter(
					({ id }) => id !== action.id
				);
				return newChatroom;
			}
			return chatroom;
		case ADD_USER_TO_CHATROOM:
			if (chatroom.id === action.chatroomId) {
				return { ...chatroom, userIds: [...chatroom.userIds, action.userId] };
			}
			return chatroom;
		case DELETE_USER_FROM_CHATROOM:
			if (chatroom.id === action.chatroomId) {
				let newChatroom = Object.assign({}, chatroom);

				newChatroom.userIds = newChatroom.userIds.filter(
					({ userId }) => userId !== action.userId
				);
				return newChatroom;
			} else {
				return chatroom;
			}
		default:
			return chatroom;
	}
};

export default chatroom;
