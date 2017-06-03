import * as Guid from 'guid';

export default {
	chatrooms: [
		{
			name: 'Preact Stuff',
			id: Guid.create().value,
			chat: [],
			userIds: []
		}
	],
	users: []
};
