//底部导航组件

import React from 'react';
import '../App.css';
import {
	NavLink
} from 'react-router-dom'
class Nav extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="nav">
			{
this.props.arrs.map((item,index) => {
				return <NavLink to={item.link} key={index}>{item.title}</NavLink>
			})
			}
			
			</div>

		)
	}

}
export default Nav