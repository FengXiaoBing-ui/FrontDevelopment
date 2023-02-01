/**
 * 浏览器判断是否全屏
 */
export default {
		// 浏览器判断是否全屏
		fullScreenToggle: () => {
				this.isFullScreen ? this.exitFullScreen() : this.reqFullScreen()
		},

		// esc监听全屏
		listenFullScreen: callback => {
				const listen = () => {
						console.log('退出全屏')
				}
				document.addEventListener('fullscreenchange', function () {
						listen()
				})
				document.addEventListener('mozfullscreenchange', function () {
						listen()
				})
				document.addEventListener('webkitfullscreenchange', function () {
						listen()
				})
				document.addEventListener('msfullscreenchange', function () {
						listen()
				})
		},

		// 浏览器判断是否全屏
		isFullScreen: document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen,

		// 浏览器全屏
		reqFullScreen: () => {
				if (document.documentElement.requestFullScreen) {
						document.documentElement.requestFullScreen()
				} else if (document.documentElement.webkitRequestFullScreen) {
						document.documentElement.webkitRequestFullScreen()
				} else if (document.documentElement.mozRequestFullScreen) {
						document.documentElement.mozRequestFullScreen()
				}
		},

		// 浏览器退出全屏
		exitFullScreen: () => {
				if (document.documentElement.requestFullScreen) {
						document.exitFullScreen()
				} else if (document.documentElement.webkitRequestFullScreen) {
						document.webkitCancelFullScreen()
				} else if (document.documentElement.mozRequestFullScreen) {
						document.mozCancelFullScreen()
				}
		}
}
