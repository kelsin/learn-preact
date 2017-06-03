import * as Guid from 'guid';

let chatroomId = Guid.create().value;
let userId = Guid.create().value;

export default {
	chatrooms: [
		{
			name: 'Preact Stuff',
			id: chatroomId,
			chat: [],
			userIds: [userId]
		}
	],
	users: [{username: "beautifully default", id: userId}],
	context: {
		chatroomId,
		userId
	}
};
