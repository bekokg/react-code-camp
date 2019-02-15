import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="content">
					<h2>Office locations:</h2>
					<div className='locations'>
					<p><span>San Jose: </span>808 Saratoga Ave, CA 95129</p>
					<p><span>Mountain View: </span>250 Del Medio Ave, CA 94040</p>
					<p><span>Burlingame: </span>1212 Burlingame Ave, CA 94010</p>
					</div>
				</div>
			</div>
			)
	}
}

export default Footer;