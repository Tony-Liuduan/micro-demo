import React from 'react';
// import RemoteSyncButton from 'app2/Button';
// import RemoteSyncCounter from 'app2/Counter';

const { lazy, Suspense } = React;
const RemoteButton = lazy(() => import('app2/Button'));
const RemoteCounter = lazy(() => import('app2/Counter'));


const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <hr />

    {/* 也可以通过同步方式加载远程组件 */}
    <h3>Romote component by Sync</h3>
    {/* <RemoteSyncButton />
    <RemoteSyncCounter /> */}
    <hr />
    <h3>Romote component by Lazy</h3>
    <Suspense fallback="Loading Button">
      <RemoteButton />
    </Suspense>
    <Suspense fallback="Loading Counter">
      <RemoteCounter />
    </Suspense>
  </div>
);

export default App;
