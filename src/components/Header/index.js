import React, {Component} from 'react';
import './header.css'
import Logo from './logo.png';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="content">
				<a href='#'><img className="logo" src={Logo} height="50px" /></a>
				<button className='nav-btn' onClick={()=>this.props.setPage('home')}>Home</button>
		    	<button className='nav-btn' onClick={()=>this.props.setPage('devices')}>Devices</button>
		    	<button className='nav-btn' onClick={()=>this.props.setPage('iphone')}>Iphone</button>
		    	<button className='nav-btn' onClick={()=>this.props.setPage('ipad')}>Ipad</button>
				</div>
			</div>	
			)
		}
}


export default Header;