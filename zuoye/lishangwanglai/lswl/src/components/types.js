import React from 'react';
import '../App.css';
import {
	NavLink
} from 'react-router-dom'
import store from '../store'
import {
	connect
} from 'react-redux'
class Types extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: 'shou'
		}
		this.setinfo = this.setinfo.bind(this)
		this.setinfo2 = this.setinfo2.bind(this)
	}
	setinfo() {
		this.setState({
			info: 'shou'
		})
		this.props.dispatch({
			type: 'set',
			info: this.state.info
		})
	}
	setinfo2() {
		this.setState({
			info: 'song'
		})
		this.props.dispatch({
			type: 'set',
			info: this.state.info
		})
	}
	render() {
		return (
			<div className="types">
						<NavLink to="/" style={{marginLeft:'0.5rem'}}>{'<'}</NavLink>
						<div>
							<span onClick={this.setinfo} style={{color:this.state.info=='song'&&'#00ace6',background:this.state.info=='shou'&&'#00ace6'}}>{this.props.txt1}</span>
							<span onClick={this.setinfo2} style={{color:this.state.info=='shou'&&'#00ace6',background:this.state.info=='song'&&'#00ace6'}}>{this.props.txt2}</span>
						</div>
						<NavLink to="/jia" style={{marginRight:'0.5rem'}}>{'+'}</NavLink>
					</div>
		)
	}
}
var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(Types);