import { MicroApp } from '/src/index.js';

// iframe 源，为了安全
const targetOrigin = '*';
MicroApp.setup({ targetOrigin: targetOrigin });


MicroApp.checkCookie({
    name: 'xxx'
})