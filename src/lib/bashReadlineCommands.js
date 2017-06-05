/**
 * Bash readline commands
 * @see: https://www.gnu.org/software/bash/manual/html_node/Bindable-Readline-Commands.html#Bindable-Readline-Commands
 *
 * TODO: put this in a library
 */

export default {
	'beginning-of-line': (s, caretStart, caretEnd) => {
		return { msg: s, caretStart: 0, caretEnd: 0 };
	},
	'unix-line-discard': (s, caretStart, caretEnd) => {
		s = s.slice(caretStart);
		return { msg: s, caretStart: 0, caretEnd: 0 };
	},
};
