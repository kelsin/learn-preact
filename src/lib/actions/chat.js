import { ADD_CHAT_LINE, DELETE_CHAT_LINE } from './types';
import * as Guid from 'guid';

function addChatLine(sender, timestamp, body) {
	return {
		type: ADD_CHAT_LINE,
		sender,
		timestamp,
		body,
		id: Guid.create().value
	}
}

function deleteChatLine(id) {
	return {
		type: DELETE_CHAT_LINE,
		id
	}
}

export { addChatLine, deleteChatLine };
