import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Devices from './components/pages/Devices';
import Footer from './components/Footer';
import Iphone from './components/pages/Iphone';
import Ipad from './components/pages/Ipad';

const pages = {
	home: 'home',
	devices: 'devices',
	iphone: 'iphone',
	ipad: 'ipad'
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			activePage: this.home
		}
	}
	setPage = (page) => {
		this.setState({activePage: page})
	};



render() {

		let currentPage;

	switch (this.state.activePage) {
		case pages.home:
		currentPage = <Home />;
		break;
		case pages.devices:
		currentPage = <Devices setPage={this.setPage}/>;
		break;
		case pages.iphone:
		currentPage = <Iphone />;
		break;
		case pages.ipad:
		currentPage = <Ipad />;
		break;
	}

  return (
    <div>

    	<Header setPage={this.setPage} currentPage={this.state.activePage}/>
 		{currentPage}
 		<Footer />
    </div>
    )
}
}

export default App;
