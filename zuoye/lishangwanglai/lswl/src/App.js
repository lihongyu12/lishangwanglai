import React from 'react';
import './App.css';
import {
	HashRouter,
	Route,
	NavLink,
	Switch
} from 'react-router-dom'
import Comp1 from './components/componertn1'
import Table from './components/table'
import Types from './components/types'
import Li from './components/li'
import Select from './components/select'
import Option from './components/option'
import Me from './components/me'
import Inputer from './components/input'
import store from './store'
import {
	connect
} from 'react-redux'
var fn = null;
var months = new Date().getMonth() + 1;

var arr1 = [{
	user: 'ijiefe',
	y: '1000',
	k: '789'
}, {
	user: 'ijiefe',
	y: '1000',
	k: '789'
}, {
	user: 'ijiefe',
	y: '1000',
	k: '789'
}, {
	user: 'ijiefe',
	y: '1000',
	k: '789'
}]
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: ''
		}
	}

	render() {
		return (
			<HashRouter>
    <div  className="box">
		<Switch>
		  <Route exact strict path="/" children={Comp1,Table}>
				<div style={{background:'#ddd',padding:' 1rem 0px',boxSizing:'border-box'}}>
					<Comp1 shou="8" li1="历史收礼" li2="历史盈亏" li3="历史送礼" song="5" colors="#ccc"/>
					<div style={{borderLeft:'1px dashed #ccc',height:'1.6rem',width:'0px',margin:'auto'}}></div>
					<Comp1 shou="2" li1={months+'月收礼'} li2="本月盈亏" li3={months+'月送礼'} song="5" colors="#1a75ff" onSetx={fn}/>
					<div style={{borderLeft:'1px dashed #ccc',height:'1.6rem',width:'0px',margin:'auto'}}></div>
					<div  style={{fontSize:'0.5rem',textAlign:'center'}}>{fn?'笑脸':'哭脸'}</div>
				</div>
				<div style={{background:'#cdcdcd',height:'12rem',overflowY:'scroll'}}>
					<div className="tables" style={{background:'#b8b894'}}>
						<span style={{fontWeight:'700',flex:'0.1'}}>排行</span>
						<span style={{fontWeight:'700',flex:'0.3'}}>用户</span>
						<span style={{fontWeight:'700',flex:'0.25'}}>历史盈亏</span>
						<span style={{fontWeight:'700',flex:'0.25'}}>本月盈亏</span>
						<span style={{fontWeight:'700',flex:'0.1'}}>更多</span>
					</div>
					{
						arr1.map((item,index)=>{
							return <Table key={index} txt1={index+1} txt2={item.user} txt3={item.y} txt4={item.k}/>
						})
					}
				</div>
		  </Route>
		  <Route exact strict path="/router1" children={Types,Li,Select,Option}>
			<div>
				<Types txt1="收礼" txt2="送礼"/>
				<Select defaultValue="全部" Width="33.333%">
					<Option value="全部">全部</Option>
					<Option value="结婚收礼">结婚收礼</Option>
					<Option value="搬家收礼">搬家收礼</Option>
					<Option value="诞辰收礼">诞辰收礼</Option>
					<Option value="满月收礼">满月收礼</Option>
					<Option value="寿宴收礼">寿宴收礼</Option>
					<Option value="升学收礼">升学收礼</Option>
					<Option value="白事收礼">白事收礼</Option>
				</Select>
				<Select defaultValue="时间" Width="33.333%">
					<Option value="111">{111}</Option>
				</Select>
				<Select defaultValue="金额" Width="33.333%">
					<Option value="111">{111}</Option>
				</Select>
				<div>
					{
			this.props.todos.arr1s.map((item, index) => {
						if (item.type == this.props.todos.infos) {
							return <Li key={index} x1="类目名称" x2="姓名" x3="时间" typename={item.typename} size="1.5rem" name={item.name} money={item.money} time={item.time}/>
								}
							})
					}
					
				</div>
			</div>
		  </Route>
		  <Route exact strict path="/router2" children={Types,Li,Select}>
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
		  </Route>
		  <Route exact strict path="/router3" children={Me}>
				<div style={{background:'#ccc'}}>
					<div style={{background:'#fff',textAlign:'center'}}>我的</div>
					<Me text="调用qq微信昵称" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=11d679cbddf1954b7961fdc1c279edae5846055fead38caafa0448adcdf83a34"/>
					<Me text="设置" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="反馈" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="帮助" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="关于" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="分享" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					
				</div>
		  </Route>
		  <Route exact strict path="/jia">
				<div>
					<Inputer />
				</div>
		  </Route>
		  <Route>
			  404页面！
		  </Route>
		</Switch>
    </div>
    <div className="nav">
		<NavLink to="/" >首页</NavLink>
		<NavLink to="/router1">礼账</NavLink>
		<NavLink to="/router2">礼事</NavLink>
		<NavLink to="/router3">我的</NavLink>
	</div>
    </HashRouter>
		)
	}
}

var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(App);