import {SET_CURRENT_CHATROOM, SET_CURRENT_USER} from '../actions/types';

let context = function(context = {}, action) {
	switch(action.type) {
		case SET_CURRENT_CHATROOM:
			return {...context,
				chatroomId: action.chatroomId
			};
		case SET_CURRENT_USER:
			return {...context,
				currentUserId: action.userId
			};
		default:
			return context;
	}
};

export default context;
