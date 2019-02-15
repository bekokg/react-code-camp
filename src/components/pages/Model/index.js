import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './model.css';

class Model extends Component {

	render() {
		const { device } = this.props.match.params;
		const { data, title } = this.props.data[device];
		return (
				<div className='content'>
					<div className='title'>{title}</div>
					<div className='steps'>
						{
							Object.keys(data).map(model => {
								return <Link className="btn" key={model} to={`${device}/${model}`}>{data[model].name}</Link>
							})
						}
					</div>
				</div>
			)
	}
}

export default Model;
