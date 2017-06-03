import { ADD_CHATROOM, DELETE_CHATROOM, ADD_USER_TO_CHATROOM, DELETE_USER_FROM_CHATROOM } from './types';
import * as Guid from 'guid';

function addChatroom(name) {
	return {
		type: ADD_CHATROOM,
		name,
		id: Guid.create().value
	}
}

function deleteChatroom(id) {
	return {
		type: DELETE_CHATROOM,
		id
	}
}

function addUserToChatroom(userId, chatroomID) {
	return {
		type: ADD_USER_TO_CHATROOM,
		userId,
		chatroomID
	}
}

function deleteUserFromChatroom(userId, chatroomID) {
	return {
		type: DELETE_USER_FROM_CHATROOM,
		userId,
		chatroomID
	}
}

export { addChatroom, deleteChatroom, addUserToChatroom, deleteUserFromChatroom };