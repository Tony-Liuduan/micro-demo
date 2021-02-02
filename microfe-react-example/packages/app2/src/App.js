import React from 'react';

import LocalButton from './Button.js';
import LocalCounter from './Counter.js';
import SharedButton from '../../../shared/Button.js';

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 2</h2>
    <LocalButton />
    <LocalCounter />
    <SharedButton />
  </div>
);

export default App;
