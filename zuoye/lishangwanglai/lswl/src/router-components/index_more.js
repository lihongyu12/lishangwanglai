import React from 'react';
import '../App.css';
import store from '../store'
import Table from '../components/table'

class Index_more extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: []
		}
	}
	componentDidMount() {
		console.log(store)
		this.setState({
			arr: store.getState().rankarr
		})
	}
	render() {
		return <div>
		<div className="index_more"><span>按盈亏</span><span>按支出</span><span>按收入</span></div>
					<
			div style = {
				{
					background: '#cdcdcd',
					height: '12rem',
					overflowY: 'scroll'
				}
			} >
			<div className="tables" style={{background:'#b8b894'}}>
						<span style={{fontWeight:'700',flex:'0.1'}}>排行</span>
						<span style={{fontWeight:'700',flex:'0.3'}}>用户</span>
						<span style={{fontWeight:'700',flex:'0.25'}}>历史盈亏</span>
						<span style={{fontWeight:'700',flex:'0.25'}}>本月盈亏</span>
					</div> {
				this.state.arr.map((item, index) => {
					
					return <Table key={index} txt1={index+1} txt2={item.user} txt3={item.y} txt4={item.k}/>
				})
			} </div> <
			/div>
	}
}
export default Index_more