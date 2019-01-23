import React, {Component} from 'react';
import './iphone.css'
import IphoneImg from './iphone.png';
import IpadImg from './ipad.png';

class Iphone extends Component {
	constructor () {
		super();
		this.state = {
			models: [
			 '8 Plus', '8', '7 Plus', '7', '6s Plus',
			 '6s', '6 Plus', '6', 'SE', '5/5C/5S'
			]
		}
	}
	render() {
		return (
				<div className="content">	
					<div className='title'>Select iPhone Model</div>
					<div className='steps'>{this.state.models.map(model => <a href="#" className='btn'> {model} </a>)}</div>
				</div>
			)
	}
}

export default Iphone;