import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './issue.css'

class Issue extends Component {
	render() {
		const { device, model, color } = this.props.match.params;
		const { data, title } = this.props.data[device].data[model].data[color];
		return (
				<div className="content">
				<div className='title'>{ title }</div>
				<div className='issue-steps'>
				{
					Object.keys(data).map( issue => {
						return (
							<Link className='btn price-btn' key={issue} to={`${color}/${issue}`}>
								<div className='price'><i class="fas fa-dollar-sign"></i>{data[issue].price}</div>{data[issue].name}
							</Link>
						) 

					})
				}

				</div>

				</div>
			)
	}
}

export default Issue;