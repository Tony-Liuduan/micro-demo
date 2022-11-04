import App from 'next/app';
// import dynamic from 'next/dynamic';
import Nav from 'home/nav'; // 如果外部是 dynamic
// const Nav = dynamic(() => import('home/nav'));

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

MyApp.getInitialProps = async ctx => {
	const appProps = await App.getInitialProps(ctx);
	return appProps;
};
export default MyApp;
