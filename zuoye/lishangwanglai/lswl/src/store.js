import {
	createStore,
	combineReducers
} from 'redux'
var arr1 = [{
	type: 'shou',
	money: 500,
	name: '小明',
	typename: '小明生日',
	type2: '寿宴收礼',
	time: '2020-5-25'
}, {
	type: 'song',
	money: 600,
	name: '小红',
	typename: '小红生日',
	type2: '寿宴收礼',
	time: '2020-5-25'
}]
var arr2 = [{
	type: '待参加',
	where: '小明家',
	typename: '小明生日',
	type2: '寿宴',
	time: '2020-5-25',
}, {
	type: '已参加',
	where: '小红家',
	typename: '小红生日',
	type2: '寿宴',
	time: '2020-5-25'
}]

var arr1s = function(state = arr1, action) {
	switch (action.type) {
		case 'shou':
			return [...state, {
				type: action.type,
				money: action.money,
				name: action.name,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text
			}]
		case 'song':
			return [...state, {
				type: action.type,
				money: action.money,
				name: action.name,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text
			}]
		default:
			return state
	}
}
var arr2s = function(state = arr2, action) {
	switch (action.type) {
		case 'add':
			return [...state, {
				text: action.text,
				isInfo: false
			}]
		default:
			return state
	}
}
var info = 'shou'
var infos = function(state = info, action) {
	switch (action.type) {
		case 'set':
			return action.info
		default:
			return state
	}
}
var stores = combineReducers({
	arr1s,
	arr2s,
	infos
})
var store = createStore(stores);

export default store