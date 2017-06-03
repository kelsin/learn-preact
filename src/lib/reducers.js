import { ADD_CHAT_LINE, DELETE_CHAT_LINE, ADD_USER, DELETE_USER } from 'actions/types';

export default function(previousState, action) {
	let newState = Object.assign({}, previousState);
	switch (action.type) {
		case ADD_CHAT_LINE:
			newState.chat.push({
				sender: action.sender,
				timestamp: action.timestamp,
				body: action.body,
				id: action.id
			});
			return newState;
		case DELETE_CHAT_LINE:
			newState.chat = newState.chat.filter(({id}) => id !== action.id);
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
		default:
			return previousState;
	}
}
