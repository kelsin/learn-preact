import { h, Component } from 'preact';
import style from './style.less';

import ChatMessages from '../chat-messages';
import ChatInput from '../chat-input';

export default class ChatContainer extends Component {
	render() {
		return (
			<div class={style.container}>
				<div class={style.messagesContainer}>
					<ChatMessages />
				</div>
				<div class={style.inputContainer}>
					<ChatInput />
				</div>
			</div>
		);
	}
}
