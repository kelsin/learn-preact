let context = function(context = {chatroomId: '', userId: ''}, action) {
	switch(action.type) {
		case SET_CURRENT_CHATROOM:
			return {...context, {chatroomId: action.chatroomId}};
		default:
			return context;
	}
};

export default context;
