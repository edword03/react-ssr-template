import { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

const App: FC = () => {
	return (
		<>
			<nav>
				<Link to="/">home</Link>
				<Link to="/test">test</Link>
			</nav>
			<Routes>
				<Route path="/" element={<h1>hello 111 111</h1>} />
				<Route path="/test" element={<h1>test</h1>} />
			</Routes>
		</>
	);
};

const Component = hot(App);
export { Component as App };
