import React from 'react';
import '../App.css';
import {
	NavLink
} from 'react-router-dom'
class Start extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			num: 0
		}
		this.nexts = this.nexts.bind(this)
	}
	nexts() {
		this.setState({
			num: ++this.state.num
		})
	}

	render() {
		return (
			<div className="start">
				<div className="start_timer">{this.props.time}</div>
				<div className="start_box" style={{left:-100*this.state.num+'vw'}}>
					<div className="start1">
						<span className="start_next" onClick={this.nexts}>NEXT</span>
					</div>
					<div className="start2">
						<span className="start_next" onClick={this.nexts}>NEXT</span>
					</div>
					<div className="start3">
						<span className="start_next" onClick={this.nexts}>NEXT</span>
					</div>
					<div className="start4">
						<span className="start_next" onClick={this.props.starts}>立即体验</span>
					</div>
			</div>
			</div>
		)
	}
}
export default Start