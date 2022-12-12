// 修改window属性的公共方法
const updateWindowProp = (prop, value, isDel) => {
	if (value === undefined || isDel) {
		delete window[prop];
	} else {
		window[prop] = value;
	}
};

class ProxySandbox {
	active() {
		// 根据记录还原沙箱
		this.currentUpdatedPropsValueMap.forEach((v, p) => updateWindowProp(p, v));
	}
	inactive() {
		// 1 将沙箱期间修改的属性还原为原先的属性
		this.modifiedPropsMap.forEach((v, p) => updateWindowProp(p, v));
		// 2 将沙箱期间新增的全局变量消除
		this.addedPropsMap.forEach((_, p) => updateWindowProp(p, undefined, true));
	}

	constructor(name) {
		this.name = name;
		this.proxy = null;
		// 存放新增的全局变量
		this.addedPropsMap = new Map();
		// 存放沙箱期间更新的全局变量
		this.modifiedPropsMap = new Map();
		// 存在新增和修改的全局变量，在沙箱激活的时候使用
		this.currentUpdatedPropsValueMap = new Map();

		const { addedPropsMap, currentUpdatedPropsValueMap, modifiedPropsMap } = this;
		const fakeWindow = Object.create(null);
		const proxy = new Proxy(fakeWindow, {
			set(target, prop, value) {
				if (!window.hasOwnProperty(prop)) {
					// 如果window上没有的属性，记录到新增属性里
					// debugger;
					addedPropsMap.set(prop, value);
				} else if (!modifiedPropsMap.has(prop)) {
					// 如果当前window对象有该属性，且未更新过，则记录该属性在window上的初始值
					const originalValue = window[prop];
					modifiedPropsMap.set(prop, originalValue);
				}
				// 记录修改属性以及修改后的值
				currentUpdatedPropsValueMap.set(prop, value);
				// 设置值到全局window上
				updateWindowProp(prop, value);
				return true;
			},
			get(target, prop) {
				return window[prop];
			},
		});
		this.proxy = proxy;
	}
}

// const newSandBox = new ProxySandbox('代理沙箱');
// const proxyWindow = newSandBox.proxy;
// proxyWindow.a = '1';
// console.log('开启沙箱：', proxyWindow.a, window.a);
// newSandBox.inactive(); //失活沙箱
// console.log('失活沙箱：', proxyWindow.a, window.a);
// newSandBox.active(); //失活沙箱
// console.log('重新激活沙箱：', proxyWindow.a, window.a);

class MultipleProxySandbox {
	active() {
		this.sandboxRunning = true;
	}
	inactive() {
		this.sandboxRunning = false;
	}

	/**
	 * 构造函数
	 * @param {*} name 沙箱名称
	 * @param {*} context 共享的上下文
	 * @returns
	 */
	constructor(name, context = {}) {
		this.name = name;
		this.proxy = null;
		const fakeWindow = Object.create({});
		const proxy = new Proxy(fakeWindow, {
			set: (target, name, value) => {
				if (this.sandboxRunning) {
					if (Object.keys(context).includes(name)) {
						context[name] = value;
					}
					target[name] = value;
				}
			},
			get: (target, name) => {
				// 优先使用共享对象
				if (Object.keys(context).includes(name)) {
					return context[name];
				}
				return target[name];
			},
		});
		this.proxy = proxy;
	}
}

const context = { document: window.document };

const newSandBox1 = new MultipleProxySandbox('代理沙箱1', context);
newSandBox1.active();
const proxyWindow1 = newSandBox1.proxy;

const newSandBox2 = new MultipleProxySandbox('代理沙箱2', context);
newSandBox2.active();
const proxyWindow2 = newSandBox2.proxy;
console.log('共享对象是否相等', window.document === proxyWindow1.document, window.document === proxyWindow2.document);

proxyWindow1.a = '1'; // 设置代理1的值
proxyWindow2.a = '2'; // 设置代理2的值
window.a = '3'; // 设置window的值
console.log('打印输出的值', proxyWindow1.a, proxyWindow2.a, window.a);

newSandBox1.inactive();
newSandBox2.inactive(); // 两个沙箱都失活

proxyWindow1.a = '4'; // 设置代理1的值
proxyWindow2.a = '4'; // 设置代理2的值
window.a = '4'; // 设置window的值
console.log('失活后打印输出的值', proxyWindow1.a, proxyWindow2.a, window.a);

newSandBox1.active();
newSandBox2.active(); // 再次激活

proxyWindow1.a = '4'; // 设置代理1的值
proxyWindow2.a = '4'; // 设置代理2的值
window.a = '4'; // 设置window的值
console.log('失活后打印输出的值', proxyWindow1.a, proxyWindow2.a, window.a);
