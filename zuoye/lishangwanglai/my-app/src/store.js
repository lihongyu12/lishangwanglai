import {
	createStore
} from 'redux'
var arr = [{
	text: '1111',
	isInfo: false
}, {
	text: '2222',
	isInfo: true
}]
var todos = function(state = arr, action) {
	switch (action.type) {
		case 'add':
			return [...state, {
				text: action.text,
				isInfo: false
			}]
		case 'remove':
			var arr = []
			state.forEach((ite, index) => {
				if (index == action.index) return
				arr.push(ite)
			})
			return arr
		case 'ji':
			var arr = []
			state.forEach((ite, index) => {
				if (index == action.index) {
					ite.isInfo = !ite.isInfo
				}
				arr.push(ite)
			})
			return arr
		default:
			return state
	}
}


var store = createStore(todos);

export default store