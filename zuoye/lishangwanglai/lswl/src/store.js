import {
	createStore,
	combineReducers
} from 'redux'
var user = {
	userimg: "http://b-ssl.duitang.com/uploads/item/201509/30/20150930140213_ZCFSr.jpeg",
	username: "我是一只小熊猫",
	sex: "男",
	birthday: "2000-5-25",
	where: "河南 南阳",
	id: 16000015,
	Registrationtime: "2016-08-20"
}
var arr1 = [{
	type: '收礼',
	money: 500,
	name: '小明',
	typename: '小明搬家',
	type2: '搬家收礼',
	time: '2020-5-25'
}, {
	type: '收礼',
	money: 500,
	name: '小明',
	typename: '小明结婚',
	type2: '结婚收礼',
	time: '2020-5-25'
}, {
	type: '收礼',
	money: 500,
	name: '小明',
	typename: '小明生日',
	type2: '寿宴收礼',
	time: '2020-5-25'
}, {
	type: '送礼',
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
var Rankarr = [{
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
var rankarr = function(state = Rankarr, action) {
	return state
}
var arr1s = function(state = arr1, action) {
	switch (action.type) {
		case '收礼':
			return [...state, {
				type: action.type,
				money: action.money,
				name: action.name,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text,
				relation: action.relation
			}]
		case '送礼':
			return [...state, {
				type: action.type,
				money: action.money,
				name: action.name,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text,
				relation: action.relation
			}]
		default:
			return state
	}
}
var arr2s = function(state = arr2, action) {
	switch (action.type) {
		case '待参加':
			return [...state, {
				type: action.type,
				money: action.money,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text,
				where: action.where,
				relation: action.relation
			}]
		case '已参加':
			return [...state, {
				type: action.type,
				money: action.money,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text,
				relation: action.relation
			}]
		default:
			return state
	}
}
var users = function(state = user, action) {
	switch (action.type) {
		case 'set':
			return { ...state,
				action
			}
		default:
			return state
	}

}
var stores = combineReducers({
	arr1s,
	arr2s,
	rankarr,
	users
})
var store = createStore(stores);

export default store