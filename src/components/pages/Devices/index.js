import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './devices.css';
import IphoneImg from './iphone.png';
import IpadImg from './ipad.png';

class Devices extends Component {
	render() {
		return (
			<div className="content">
				<div className="devices">
				<Link to='/iphone'>
				<div className='btn'>
					<h3>iPhone</h3>
					<img src={IphoneImg} height="200px" />
				</div>
				</Link>
				<Link to='/ipad'>
				<div className='btn'>
					<h3>iPad</h3>
					<img src={IpadImg} height="200px" />
				</div>
				</Link>
				</div>
			</div>
			)
	}
}

export default Devices;