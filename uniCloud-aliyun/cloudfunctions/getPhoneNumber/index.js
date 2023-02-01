'use strict';
exports.main = async (event) => {
		const appid = '__UNI__4D53B7A'
		const apiKey = '29bd757ffb9f1923e2e0e8c2743ae397'
		const apiSecret = '15a855e4262495451971121039823450'
		const res = await uniCloud.getPhoneNumber({
				provider: 'univerify',
				appid: appid, // DCloud appid
				apiKey: apiKey, // 在开发者中心开通服务并获取apiKey
				apiSecret: apiSecret, // 在开发者中心开通服务并获取apiSecret
				access_token: event.access_token,
				openid: event.openid
		})
		// 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，
		// 详见：https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=httpclient
		return {  // 不建议把完整手机号返回给前端
				code: 0,
				message: '获取手机号成功',
				data: {phoneNumber: res.phoneNumber}
		}
}
