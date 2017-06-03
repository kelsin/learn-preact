import {
	ADD_CHAT_LINE,
	DELETE_CHAT_LINE,
	ADD_CHATROOM,
	DELETE_CHATROOM,
	ADD_USER_TO_CHATROOM,
	DELETE_USER_FROM_CHATROOM
} from "actions/types";

import chatroom from './chatroom';

let chatrooms = function(chatrooms = [], action) {
	switch (action.type) {
		case ADD_CHAT_LINE:
		case DELETE_CHAT_LINE:
		case ADD_USER_TO_CHATROOM:
		case DELETE_USER_FROM_CHATROOM:
			return chatrooms.map(function(room){
				return chatroom(room, action);
			});
		case ADD_CHATROOM:
			return [...chatrooms, {
				name: action.name,
				id: action.id,
				chat: [],
				userIds: []
			}];
		case DELETE_CHATROOM:
			return chatrooms.filter(({ id }) => id !== action.chatroomId);
		default:
			return chatrooms;
	}
};

export default chatrooms;
