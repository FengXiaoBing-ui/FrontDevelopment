import http from './interface'
import config from "/src/config/index"

// 请求拦截
http.interceptor.request = null
// 响应拦截
http.interceptor.response = function (response) {
		const resp = {}
		resp.response = response
		// if (response.statusCode === 200 && response.data.code === -1) {
		// 	uni.navigateTo({
		// 		url: "/pages/sign/login/login"
		// 	})
		// 	resp.fail = true
		// 	return resp.data
		// }
		resp.fail = false
		return resp
}

// post请求
export function post(url, bodyParam, isShowMsg = false,) {
		const data = {}
		if (bodyParam) {
				Object.assign(data, bodyParam)
		}
		return http.request({
				url,
				method: 'POST',
				data,
				isShowMsg
		})

}

// get请求
export function get(url, pathParam, isShowMsg = false) {
		const data = {}
		if (pathParam) {
				Object.assign(data, pathParam)
		}
		return http.request({
				url: url,
				method: 'GET',
				data: data,
				isShowMsg
		})
}

export function uploadFile(data) {
		uni.showLoading();
		return new Promise((resolve, reject) => {
				let str = '';
				if (data.type == 0) { //平台设置
						str = 'fileupload/' + 'setting/' + businessInfo.id;
				} else if (data.type == 1) { //商户logo
						str = 'fileupload/' + 'business/' + businessInfo.id + '/logo';
				} else if (data.type == 2) { //活动，商品图片
						str = 'fileupload/' + 'business/' + businessInfo.id + '/product';
				} else if (data.type == 3) { //分享图片
						str = 'fileupload/' + 'business/' + businessInfo.id + '/gift';
				} else if (data.type == 4) { //虚拟礼物图片
						str = 'fileupload/' + 'business/' + businessInfo.id + '/setting';
				} else if (data.type == 5) { //用户头像上传
						str = 'fileupload/' + 'user/' + userInfo.id + '/head';
				} else if (data.type == 6) { //个人二维码
						str = 'fileupload/' + 'user/' + userInfo.id + '/qrcode';
				} else if (data.type == 7) { //用户照片
						str = 'fileupload/' + 'user/' + userInfo.id + '/photo';
				} else if (data.type == 8) { //用户上传视频
						str = 'fileupload/' + 'user/' + userInfo.id + '/video';
				} else {
						// 截断
						reject({
								code: 0,
								data: null,
								msg: '请上传type=>0:平台设置,1:商户logo,2:活动，商品图片,3:分享图片,4:虚拟礼物图片,5:用户头像上传,6:个人二维码,7:用户照片,8:用户上传视频,9如需自定义请按规范添加"'
						})
						uni.hideLoading();
						return
				}
				getPolicy(str).then(res => {
						// 图片名称
						let imageName = res.obj.time + '-' + data.filepath.name;
						// 图片路径
						let keyValue = res.obj.dir + '/' + imageName
						let formData = {
								'Key': keyValue,
								'Policy': res.obj.policy,
								'OSSAccessKeyId': res.obj.accessid,
								'Success_Action_Status': '200',
								'Signature': res.obj.signature,
						};
						uni.uploadFile({
								url: res.obj.host,
								filePath: data.filepath.path, //choostimage 返回的临时图片路径
								fileType: 'image',
								name: 'file',
								formData: formData,
								complete: ($ref) => {
										uni.hideLoading();
										if ($ref.statusCode == 200) {
												resolve({
														code: 200,
														data: {
																url: keyValue
														},
														msg: '上传成功'
												})
										} else {
												reject({
														code: 0,
														data: null,
														msg: '上传失败'
												})
										}
								}
						})
				})
		})
}

// 阿里云上传文件授权
async function getPolicy(data) {
		let res = await uni.request({
				url: config.baseUrl + 'ossApi/getPolicy',
				data: {
						dir: data
				},
				method: 'POST',
				header: {
						'Content-Type': 'application/x-www-form-urlencoded'
				}
		})
		return res[1].data
}

export default {
		post,
		get,
		uploadFile,
}
