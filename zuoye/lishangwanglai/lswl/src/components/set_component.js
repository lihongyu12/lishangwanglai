import React from 'react';
import '../App.css';
import {
	NavLink
} from 'react-router-dom'
class Set extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="set">
				<div className="set_hd">
		<NavLink to={this.props.to||'/'} className="set_hd-to">{'<'}</NavLink> < span className = "set_hd-ti" > {
			this.props.title||'标题'
		} < /span>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default Set