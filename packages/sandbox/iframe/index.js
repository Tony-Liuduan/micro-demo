// 引用：https://juejin.cn/post/6981374562877308936

class SandboxWindow {
    /**
     * 构造函数
     * @param {*} context 需要共享的对象
     * @param {*} frameWindow iframe的window
     */
    constructor(context, frameWindow) {
        
        return new Proxy(frameWindow, {
            get(target, name) {
                if (name in context) { // 优先使用共享对象
                    return context[name];
                }
                return target[name];
            },
            set(target, name, value) {
                if (name in context) { // 修改共享对象的值
                    return context[name] = value;
                }
                target[name] = value;
            }
        })
    }
}

const iframe  = document.createElement('iframe',{src:'about:blank'});
document.body.appendChild(iframe);
const sandboxGlobal = iframe.contentWindow;

// 需要全局共享的变量
const context = { document:window.document, history: window.history }

// 创建沙箱
const newSandboxWindow = new SandboxWindow(context, sandboxGlobal);  

// 判断沙箱上的对象和全局对象是否相等
console.log('equal',newSandboxWindow.document === window.document)

newSandboxWindow.abc = '1'; //在沙箱上添加属性
console.log('window', window.abc);   // 在全局上查看属性
console.log('sandboxGlobal', sandboxGlobal.abc) //在沙箱上查看属性
console.log('newSandboxWindow', newSandboxWindow.abc) //在沙箱上查看属性

console.log(sandboxGlobal === newSandboxWindow);