import React from 'react';
const { lazy, Suspense } = React;

const RemoteButton = lazy(() => import('app2/Button'));


const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <Suspense fallback="Loading Button">
      <RemoteButton />
    </Suspense>
  </div>
);

export default App;
