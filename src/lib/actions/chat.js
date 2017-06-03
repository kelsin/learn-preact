import { ADD_CHAT_LINE } from './types';

function addChatLine(sender, timestamp, body) {
	return {
		type: ADD_CHAT_LINE,
		sender,
		timestamp,
		body
	}
}

export { addChatLine };
