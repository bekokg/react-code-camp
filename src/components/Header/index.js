import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './header.css'
import Logo from './logo.png';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="content">
					<Link to='/'><img className="logo" src={Logo} height="50px" /></Link>
					<Link to='/' className='nav-btn' >Home</Link>
			    	<Link to='/' className='nav-btn' >Devices</Link>
			    	<Link to='/iphone' className='nav-btn' >iPhone</Link>
			    	<Link to='/ipad' className='nav-btn' >iPad</Link>
		    	</div>
			</div>	
			)
		}
}


export default Header;