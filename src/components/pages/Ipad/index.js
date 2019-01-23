import React, {Component} from 'react';
import './ipad.css'
import IphoneImg from './iphone.png';
import IpadImg from './ipad.png';

class Ipad extends Component {

	constructor () {
		super();
		this.state = {
			models: [
			'iPad Air 2', 'iPad Air', 'iPad Mini 4',
			 'iPad Mini 1, 2, 3', 'iPad 2, 3, 4', 'iPad 5', 'iPad 6'
			 ]
		}
	}

	render() {
		return (
				<div className="content">
					<div className="title">Select iPad Model</div>
					<div className='ipad-steps'>{this.state.models.map
						(model => <a href="#" className='btn'>{model}</a>)} </div>
				</div>
			)
	}
}

export default Ipad;