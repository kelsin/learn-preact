import * as Guid from 'guid';

let chatroomId = Guid.create().value;
let userId = Guid.create().value;

export default {
	chatroomId,
	userId,
	chatrooms: [
		{
			name: 'Preact Stuff',
			id: chatroomId,
			chat: [],
			userIds: [userId]
		}
	],
	users: [{username: "default", id: userId}]
};
