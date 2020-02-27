import React from 'react';
import '../App.css';
import Types from '../components/types'
import Li from '../components/li'
import Select from '../components/select'
import Option from '../components/option'
import {
	connect
} from 'react-redux'
class Router2 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
			<div style={{background:'#ccc'}}>
					<Types txt1="待参加" txt2="已参加" />
					<div style={{margin:'0.5rem 0px'}}>
						<Select defaultValue="类别" Width="50%">
							<Option value="111">{111}</Option>
						</Select>
						<Select defaultValue="时间" Width="50%">
							<Option value="111">{111}</Option>
						</Select>
					</div>
					
					<div>
						{
							this.props.todos.arr2s.map((item,index)=>{if(item.type=='待参加') {return <Li key={index} x1="事件名" x2="地点" x3="时间" typename={item.typename} size="0.5rem" name={item.where} money={item.type} time={item.time}/>
								}
							})
						}
					</div>
				</div>
		</div>
		)
	}
}
var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(Router2);