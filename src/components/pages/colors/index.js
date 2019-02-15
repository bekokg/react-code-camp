import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './colors.css';

class Colors extends Component {

	render() {
		const { model, device } = this.props.match.params;
		const { data, title } = this.props.data[device].data[model];

		return (
				<div className='content'>
					<div className='color-title'>{ title }</div>
					<div className='color-steps'>
						{
							Object.keys(data).map(color => {
								return (
									<Link className="btn" key={color} to={`${model}/${color}`}>
										{data[color].name}
									</Link>
								)
							 
							})
						}
					</div>
				</div>
			)
	}
}

export default Colors;
