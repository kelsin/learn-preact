import { ADD_CHAT_LINE } from 'actions/types';

export default function(previousState, action) {
	switch (action.type) {
		case ADD_CHAT_LINE:
			let newState = Object.assign({}, previousState);
			newState.chat.push({
				sender: action.sender,
				timestamp: action.timestamp,
				body: action.body
			});
			return newState;
		default:
			return previousState;
	}
}
