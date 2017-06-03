import chatrooms from './reducers/chatroom';
import users from './reducers/users';
import { combineReducers } from 'redux';

export default combineReducers({ chatrooms, users });
