import MessageType from './message-type.js';

/**
 * 主应用，
 */
class MainApp {
	constructor() {
		this.registerEvents();
	}

	// 注册事件
	registerEvents() {
		window.addEventListener('message', e => {
			try {
				const { type, data } = e.data;
				const arg = { data, originEvent: e };
				if (type === MessageType.CHECK_COOKIE) {
					app.checkCookie(arg);
				}
			} catch (err) {
				console.error('主应用接收到消息失败', err);
			}
		});
	}
}

let app = null;
const start = ({ onCheckCookie }) => {
	app = new MainApp();
	app.checkCookie = onCheckCookie;
};

export default {
	start,
};
