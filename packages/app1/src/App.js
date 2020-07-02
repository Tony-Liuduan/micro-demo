import React from 'react';
import RemoteSyncButton from 'app2/Button';

const { lazy, Suspense } = React;
const RemoteButton = lazy(() => import('app2/Button'));


const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    {/* 也可以通过同步方式加载远程组件 */}
    <RemoteSyncButton />
    <br/>
    <Suspense fallback="Loading Button">
      <RemoteButton />
    </Suspense>
  </div>
);

export default App;
