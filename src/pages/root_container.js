import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PageTransition from 'react-router-page-transition';

import AppHeader from './app_header';
import Home from './home';

injectTapEventPlugin();

export default class RootContainer extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" minHeight="100vh" className="RootContainer">
				<AppHeader />
				<PageTransition>{this.props.children || <Home />}</PageTransition>

			</Flexbox>
		);
	}
}
