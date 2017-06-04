import * as Guid from 'guid';

let chatroomId = Guid.create().value;

export default {
	chatrooms: [
		{
			name: 'Preact Stuff',
			id: chatroomId,
			chat: [],
			userIds: []
		}
	],
	users: [],
	context: {
		chatroomId,
		currentUserId: ''
	}
};
