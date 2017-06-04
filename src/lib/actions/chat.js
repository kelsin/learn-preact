import { ADD_CHAT_LINE, DELETE_CHAT_LINE } from './types';
import * as Guid from 'guid';
import {merge} from 'lodash';
import SocketClient from '../SocketClient';

function addChatLine(msg) {
	msg.id = Guid.create().value;
	SocketClient.sendMessage('chat message', msg);
	msg.type = ADD_CHAT_LINE;
	return msg;
}

function addChatLineFromServer(msg) {
	msg.type = ADD_CHAT_LINE;
	return msg;
}

function deleteChatLine(chatroomId, id) {
	return {
		type: DELETE_CHAT_LINE,
		chatroomId,
		id
	}
}

export { addChatLine, addChatLineFromServer, deleteChatLine };
