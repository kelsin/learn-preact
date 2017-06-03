import { ADD_CHAT_LINE, DELETE_CHAT_LINE, ADD_USER, DELETE_USER, ADD_CHATROOM, DELETE_CHATROOM, ADD_USER_TO_CHATROOM, DELETE_USER_FROM_CHATROOM  } from 'actions/types';

export default function(previousState, action) {
	let newState = Object.assign({}, previousState);
	switch (action.type) {
		case ADD_CHATROOM:
			newState.chatrooms.push({
				name: action.name,
				id: action.id,
				chat: [],
				userIds: []
			});
			return newState;
		case DELETE_CHATROOM:
			newState.chatrooms = newState.chatrooms.filter(({id}) => id !== action.chatroomId);
			return newState;
		case ADD_CHAT_LINE:
			newState.chatrooms = newState.chatrooms.map(function(chatroom) { 
				if (chatroom.id === action.chatroomId) {
					chatroom.chat.push({
						sender: action.sender,
						timestamp: action.timestamp,
						body: action.body,
						id: action.id
					});
				}
				return chatroom;
			});
			return newState;
		case DELETE_CHAT_LINE:
			newState.chatrooms = newState.chatrooms.map(function(chatroom) {
				if (chatroom.id === action.chatroomId) {
					chatroom.chat = chatroom.chat.filter(({id}) => id !== action.id);
				}
				return chatroom;
			});
			return newState;
		case ADD_USER:
			newState.users.push({
				username: action.username,
				id: action.id
			});
			return newState;
		case DELETE_USER:
			newState.users = newState.users.filter(({id}) => id !== action.id);
			return newState;
		case ADD_USER_TO_CHATROOM:
			newState.chatrooms = newState.chatrooms.map(function(chatroom) { 
				if (chatroom.id === action.chatroomId) {
					chatroom.userIds.push(action.userId);
				}
				return chatroom;
			});
			return newState;
		case DELETE_USER_FROM_CHATROOM:
			newState.chatrooms = newState.chatrooms.map(function(chatroom) { 
				if (chatroom.id === action.chatroomId) {
					chatroom.userIds = chatroom.userIds.filter(({userId}) => userId !== action.userId);
				}
				return chatroom;
			});
			return newState;
		default:
			return previousState;
	}
}
