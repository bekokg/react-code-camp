import React, {Component} from 'react';
import './devices.css';
import IphoneImg from './iphone.png';
import IpadImg from './ipad.png';

class Devices extends Component {
	render() {
		return (
			<div className="content">
				<div className="devices">
				<div className='btn' onClick={() => this.props.setPage('iphone')}>
					<h3>iPhone</h3>
					<img src={IphoneImg} height="200px" />
				</div>
				<div className='btn' onClick={()=> this.props.setPage('ipad')}>
					<h3>iPad</h3>
					<img src={IpadImg} height="200px" />
				</div>
				</div>
			</div>
			)
	}
}

export default Devices;