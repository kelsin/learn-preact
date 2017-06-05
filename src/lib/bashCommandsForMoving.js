/**
 * Bash commands for moving
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
