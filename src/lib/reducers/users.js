import {
	ADD_USER,
	DELETE_USER
} from "actions/types";

let users = function(users = [], action) {
	switch (action.type) {
		case ADD_USER:
			return [...users, {
				username: action.username,
				id: action.id
			}];
		case DELETE_USER:
			return users.filter(({ id }) => id !== action.id);
		default:
			return users;
	}
};

export default users;
