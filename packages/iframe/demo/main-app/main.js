import { MainApp } from '/src/index.js';

MainApp.start({
	// 监听事件
	onCheckCookie(res) {
		// 打印输出子应用传递过来的数据
		console.log('main-app get message:', res);
		// to do something
	},
});
