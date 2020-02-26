 import React from 'react';
 import '../App.css';
 import store from '../store'



 class Input extends React.Component {
 	constructor(props) {
 		super(props)
 		this.myInput = React.createRef()
 		this.add = this.add.bind(this)
 	}

 	add() {
 		if (this.myInput.current.value != '') {
 			store.dispatch({
 				type: 'add',
 				text: this.myInput.current.value
 			})
 			this.myInput.current.value = ''
 		}
 	}

 	render() {
 		return (
 			<div className="headers">
			<div className="headers-box">
				<span className="logo">ToDoList</span>
				<button className="btn" onClick={()=>{this.add()}}>add</button>
				<input type="text" className="inputs" placeholder="添加ToDo" ref={this.myInput}/>
			</div>
		</div>
 		)
 	}
 }

 export default Input;