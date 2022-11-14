import React from 'react';
import NextjsHostComponent from 'nextHost/nextjs-remote-component';
import NextjsHostPage from 'nextHost/nextjs-remote-page';
import NextjsRemoteComponent from 'nextRemote/nextjs-remote-component';
import NextjsRemotePage from 'nextRemote/nextjs-remote-page';

const App = () => (
	<>
		<div>This is the React container App hosted at localhost:4000</div>
		<NextjsHostComponent />
		<NextjsHostPage />
		<br />
		<NextjsRemoteComponent />
		<NextjsRemotePage />
	</>
);

export default App;
