import { h, Component } from 'preact';
import style from './style.less';
import clone from 'lodash/clone';

export default function ChatMessage(props) {
	let messageClass;
	switch (props.type) {
	case 'COMMAND':
		messageClass = 'command-message';
		break;
	default:
		messageClass = 'message';
		break;
	}
	return (
		<div class={style[messageClass]}>
			<div class={style.sender}>{props.getUsername(props.msg.sender)}</div>
			<div class={style.body}>{props.msg.body}</div>
			<div class={style.timestamp}>{props.msg.timestamp}</div>
		</div>
	)
};
