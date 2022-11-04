import { createFederatedCatchAll } from '../shared';

// FIXME: 如果刷新页面 process.env.REMOTES 就为 null
console.log('process.env.REMOTES', JSON.stringify(process.env.REMOTES))

export default createFederatedCatchAll(process.env.REMOTES);
