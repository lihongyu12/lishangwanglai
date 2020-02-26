 import React from 'react';
 import '.././App.css';
 import store from '../store'
 import {
 	connect
 } from 'react-redux'
 class List extends React.Component {
 	constructor(props) {
 		super(props)
 		this.myChecked = React.createRef()
 		this.removes = this.removes.bind(this)
 		this.setinfo = this.setinfo.bind(this)
 	}
 	componentDidMount() {
 		this.props.todos.forEach((ite, index) => {
 			if (this.props.index == index) {
 				if (ite.isInfo) {
 					this.myChecked.current.checked = 'checked'
 				} else {
 					this.myChecked.current.checked = ''
 				}
 			}
 		})
 	}
 	removes() {
 		this.props.dispatch({
 			type: 'remove',
 			index: this.props.index
 		})
 	}
 	setinfo() {
 		this.props.dispatch({
 			type: 'ji',
 			index: this.props.index,
 		})
 	}
 	render() {
 		return (<div className="List">
		<input type="checkbox" ref={this.myChecked} onClick={()=>{this.setinfo()}}/> < span className = "text" > {
			this.props.text
		} < /span>
					<button onClick={()=>{this.removes()}}>删除</button>
 				</div>)
 	}
 }


 var mapStateToProps = function(state) {
 	return {
 		todos: state
 	}
 }
 export default connect(mapStateToProps)(List);