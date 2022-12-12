class UserCard extends HTMLElement {
	constructor() {
		super();

        // var shadow = this.attachShadow( { mode: 'open' } );

        // closed 表示 Shadow DOM 是封闭的，不允许外部访问
        var shadow = this.attachShadow( { mode: 'closed' } );

		/**
         * 非 template 写法
        
        var image = document.createElement('img');
		image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
		image.classList.add('image');

		var container = document.createElement('div');
		container.classList.add('container');

		var name = document.createElement('p');
		name.classList.add('name');
		name.innerText = 'User Name';

		var email = document.createElement('p');
		email.classList.add('email');
		email.innerText = 'yourmail@some-email.com';

		var button = document.createElement('button');
		button.classList.add('button');
		button.innerText = 'Follow';

		container.append(name, email, button);
		this.append(image, container); 
        
        */

        // template 定义目标
		var templateElem = document.getElementById('userCardTemplate');
		// 克隆了它的所有子元素，这是因为可能有多个自定义元素的实例，这个模板还要留给其他实例使用，所以不能直接移动它的子元素
		var content = templateElem.content.cloneNode(true);
		content.querySelector('img').setAttribute('src', this.getAttribute('image'));
		content.querySelector('.container>.name').innerText = this.getAttribute('name');
		content.querySelector('.container>.email').innerText = this.getAttribute('email');

		// this.appendChild(content);
        shadow.appendChild(content);
	}
}

// 使用浏览器原生的customElements.define()方法，告诉浏览器<user-card>元素与这个类关联
window.customElements.define('user-card', UserCard);
