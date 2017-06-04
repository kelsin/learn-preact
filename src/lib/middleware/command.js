import { ADD_CHAT_LINE } from '../actions/types';

const commandMiddleware = () /* store */ => next => action => {
	// make sure we're only parsing commands starting with /
	if (action.type === ADD_CHAT_LINE && action.body && action.body.charAt(0) === '/') {
		const {fn, args} = parseCommand(action.body);

		// get new action
		if (actions.hasOwnProperty(fn)) {
			return next(actions[fn](action, ...args));
		}
	}
	return next(action);
};

const actions = {
	'slap': (action, target) => {
		return {
			...action,
			messageType: 'COMMAND',
			body: `slapped ${target} with a reasonably-sized trout.`
		};
	}
};

function parseCommand(string) {
	const tokens = string.substring(1).split(' ');
	const fn = tokens[0].toLowerCase();
	const args = tokens.slice(1);
	return { fn, args };
}

module.exports = commandMiddleware;
