import chatrooms from './reducers/chatrooms';
import users from './reducers/users';
import context from './reducers/context';
import { combineReducers } from 'redux';

export default combineReducers({ chatrooms, users, context});
