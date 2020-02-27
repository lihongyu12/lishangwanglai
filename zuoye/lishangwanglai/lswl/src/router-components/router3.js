import React from 'react';
import '../App.css';
import Me from '../components/me'
class Router3 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<div style={{background:'#ccc'}}>
					<div style={{background:'#fff',textAlign:'center'}}>我的</div>
					<Me text="调用qq微信昵称" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=11d679cbddf1954b7961fdc1c279edae5846055fead38caafa0448adcdf83a34"/>
					<Me text="设置" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="反馈" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="帮助" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="关于" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
					<Me text="分享" imgwidth="19px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=f7fee2d193d03643818fdc10edd163add46afe84602514489f602632e62de704"/>
				</div>
		</div>
		)
	}
}
export default Router3