import React from 'react';
import NextjsRemoteComponent from 'remote/nextjs-remote-component';
import NextjsRemotePage from 'remote/nextjs-remote-page';

const App = () => (
	<>
		<div>This is the React container App hosted at localhost:4000</div>
		<NextjsRemoteComponent />
		<NextjsRemotePage />
	</>
);

export default App;
