import {SET_CURRENT_CHATROOM} from '../actions/types';

let context = function(context = {}, action) {
	switch(action.type) {
		case SET_CURRENT_CHATROOM:
			return {...context,
				chatroomId: action.chatroomId
			};
		default:
			return context;
	}
};

export default context;
