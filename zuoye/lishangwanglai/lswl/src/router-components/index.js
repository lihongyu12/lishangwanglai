import React from 'react';
import '../App.css';
import Comp1 from '../components/componertn1'
import Table from '../components/table'
import {
	NavLink
} from 'react-router-dom'
import store from '../store'
var fn = null;
var months = new Date().getMonth() + 1;


class Index extends React.Component {
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
		return (
			<div>
			<div style={{background:'#ddd',padding:' 1rem 0px',boxSizing:'border-box'}}>
					<Comp1 shou="8" li1="历史收礼" li2="历史盈亏" li3="历史送礼" song="5" colors="#ccc"/>
					<div style={{borderLeft:'1px dashed #ccc',height:'1.6rem',width:'0px',margin:'auto'}}></div>
					<Comp1 shou="2" li1={months+'月收礼'} li2="本月盈亏" li3={months+'月送礼'} song="5" colors="#1a75ff" onSetx={fn}/>
					<div style={{borderLeft:'1px dashed #ccc',height:'1.6rem',width:'0px',margin:'auto'}}></div>
					<div  style={{fontSize:'0.5rem',textAlign:'center'}}>{fn?'笑脸':'哭脸'}</div>
				</div> <
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
						<span style={{fontWeight:'700',flex:'0.1'}}><NavLink to="/index_more">更多</NavLink></span>
					</div> {
				this.state.arr.map((item, index) => {
					if (index<=6) {
						return <Table key={index} txt1={index+1} txt2={item.user} txt3={item.y} txt4={item.k}/>
					}
					
				})
			} </div> <
			/div>
		)
	}
}
export default Index