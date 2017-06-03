import { h, Component } from 'preact';
import style from './style.less';

export default class ChatInput extends Component {
	render() {
		return (
			<div class={style.container}>
				<input type='text' class={style.input} />
			</div>
		);
	}
}
