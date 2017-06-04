import { ADD_CHAT_LINE } from '../../actions/types';
import * as Commands from './commands';

const commandMiddleware = () /* store */ => next => action => {
	// make sure we're only parsing commands starting with /
	if (action.type === ADD_CHAT_LINE && action.body && action.body.charAt(0) === '/') {
		const {fn, args} = parseCommand(action.body);

		// get new action
		if (Commands.hasOwnProperty(fn)) {
			return next(Commands[fn](action, ...args));
		}
	}
	return next(action);
};

const parseCommand = (string) => {
	const tokens = string.substring(1).split(' ');
	const fn = tokens[0].toLowerCase();
	const args = tokens.slice(1);
	return { fn, args };
};

module.exports = commandMiddleware;
