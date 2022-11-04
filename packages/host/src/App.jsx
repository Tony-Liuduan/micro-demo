import React from 'react';
import NextjsRemoteComponent from 'remote/nextjs-remote-component';
import NextjsRemoteComponent1 from 'nextRemote/nextjs-remote-component';
import NextjsRemotePage from 'remote/nextjs-remote-page';
import NextjsRemotePage1 from 'nextRemote/nextjs-remote-page';

const App = () => (
	<>
		<div>This is the React container App hosted at localhost:4000</div>
		<NextjsRemoteComponent />
		<NextjsRemotePage />
		<br />
		<NextjsRemoteComponent1 />
		<NextjsRemotePage1 />
	</>
);

export default App;
