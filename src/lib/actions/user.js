import { ADD_USER, DELETE_USER } from './types';
import * as Guid from 'guid';

function addUser(username) {
	return {
		type: ADD_USER,
		username,
		id: Guid.create().value
	}
}

function deleteUser(id) {
	return {
		type: DELETE_USER,
		id
	}
}


export {addUser, deleteUser};
