// 一、 es6有哪些新特性 ?
Let和const关键字
变量的解构赋值
字符串， 数值， 数组， 对象， 函数的扩展
// 二、 清除浮动的几种方法 ? (至少写 3 种)
给父级也加浮动
给父级加display: inline - block
在浮动元素下加div.clear {
	height: 0 px;font - size: 0;clear: both;
}
在浮动元素下加br clear = all
给浮动元素的父级加: after {
	content:;display: block;clear: both;
}
// 三、 CSS3 有哪些新特性 ? (至少写出 3 种)
选择器
多背景图
文字阴影
圆角(边框半径)
边框图片
盒阴影
媒体查询
语音
// 四、 Vue - router有哪几种导航钩子 ?
全局守卫： router.beforeEach
全局解析守卫： router.beforeResolve
全局后置钩子： router.afterEach
路由独享的守卫： beforeEnter
组件内的守卫： beforeRouteEnter、 beforeRouteUpdate、 beforeRouteLeave
// 五、 Javascript字符串操作函数有哪些 ? (至少写出3种)
splice() substr() substring()
// 六、 什么是跨域， 如何实现跨域访问 ? (至少写出3种)
跨域就是指： 跨域是指不同域名之间相互访问

利用了 script 不受同源策略的限制
Response Headers 中加入一个属性 Access - Control - Allow - Origin；
前端向发送请求， 经过代理， 请求需要的服务器资源
// 七、 请简述Vue的双向数据绑定原理是什么
通过Object.defineProperty() 来劫持到各个属性的getter setter， 在数据变动的时候， 会被observer观察到， 会通过Dep通知数据的订阅者watcher， 之后进行相应的视图上面的变化
// 八、 闭包的3特性 ?
外界无法访问内部数据
在外部函数被调 用之后， 闭包结构依然保存在
函数的局部变量在函数返回之后仍然可用
// 九、
// var numbers = [1, 2, 3, 4];
// 将numbers转换成“.”连接起来的字符串。
var s = numbers.join('.')
// 十、 请详细说下你对vue生命周期的理解 ?
在beforeCreated阶段， vue实例的挂载元素$el和 ** 数据对象 ** data都为undefined， 还未初始化。 在created阶段， vue实例的数据对象data有了， $el还没有。
在beforeMount阶段， vue实例的$el和data都初始化了， 但还是挂载之前为虚拟的dom节点， data.message还未替换。 在mounted阶段， vue实例挂载完成， data.message成功渲染。
当data变化时， 会触发beforeUpdate和updated方法。
在执行destroy方法后， 对data的改变不会再触发周期函数， 说明此时vue实例已经解除了事件监听以及和dom的绑定， 但是dom结构依然存在
// 	十一、 请说下vue组件间的传值 ?
父组件向子组件传递数据 在Vue 中, 可以使用 props 向子组件传递数据。
子组件向父组件传递数据 子组件主要通过事件传递数据给父组件 子组件部分
// 	十二、 浏览器本地存储有哪几种, 区别是什么 ?
sessionStorage， 只会在窗口打开的时候才有效， 一次性缓存会话， 关闭浏览器自动释放
localStorage， 只要没有手动清除， 就会一直保留， 永久存储， 以文件形式存储
cookie, 是用来跟踪用户信息的， 默认只是一次性会话， 维持到浏览器关闭