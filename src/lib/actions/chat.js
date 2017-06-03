import { ADD_CHAT_LINE, DELETE_CHAT_LINE } from './types';
import * as Guid from 'guid';

function addChatLine(chatroomId, sender, timestamp, body) {
	return {
		type: ADD_CHAT_LINE,
		chatroomID,
		sender,
		timestamp,
		body,
		id: Guid.create().value
	}
}

function deleteChatLine(chatroomId, id) {
	return {
		type: DELETE_CHAT_LINE,
		chatroomId,
		id
	}
}

export { addChatLine, deleteChatLine };
