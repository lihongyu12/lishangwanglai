 import React from 'react';
 import '../App.css';
 import List from './list'
 class Lists extends React.Component {
 	constructor(props) {
 		super(props)
 		this.state = {
 			num: 0
 		}
 	}

 	render() {
 		return (<div style={{margin:'20px auto',width:'600px'}}>
					<h5 style={{fontSize:'26px'}}>{this.props.title}<span style={{float:'right'}}>{
			 			this.state.num			
					}</span></h5>
					<div>{
						this.props.todos.map((ite,index)=>{return this.props.isInfo==ite.isInfo && <List index={index} key={index} text={ite.text}></List>})	
					}
					</div>
 				</div>)
 	}
 }


 export default Lists;