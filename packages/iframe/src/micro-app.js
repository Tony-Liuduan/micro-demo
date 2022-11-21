import MessageType from './message-type.js';

let _targetOrigin = '*';

const setup = ({ targetOrigin }) => {
	_targetOrigin = targetOrigin;
};

// 通知事件
const notify = (type, data) => {
	top.postMessage(
		{
			type,
			data,
		},
		_targetOrigin
	);
};

// 验证 cookie 是否过期
const checkCookie = data => {
	notify(MessageType.CHECK_COOKIE, data);
};

// 是否 iframe
const isIframe = () => {
	return window.top !== window;
};

export default {
	setup,
	notify,
	checkCookie,
	isIframe,
};
