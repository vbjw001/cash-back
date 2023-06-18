const http = {
	baseUrl:'http://127.0.0.1:8090',
	//请求方法
	request(config){
		//config:请求对象,具体值参照uniapp文档
		config = beforeRequest(config);
		config.url = this.baseUrl + config.url;
		//创建一个Promise对象，在里面发送请求
		return new Promise((resolve,reject) => {
			uni.request(config)
				.then(res => {
					let [error,resp] = res
					const response = beforeResponse(resp)
					resolve(response)
				}).catch(err => {
					errorHandle(err)
					reject(err)
				})
		})
	},
	//请求方法
	requestToken(config){
		//config:请求对象,具体值参照uniapp文档
		// config = beforeRequest(config);
		config.url = this.baseUrl + config.url;
		//创建一个Promise对象，在里面发送请求
		return new Promise((resolve,reject) => {
			uni.request(config)
				.then(res => {
					let [error,resp] = res
					const response = beforeResponse(resp)
					resolve(response)
				}).catch(err => {
					errorHandle(err)
					reject(err)
				})
		})
	},
	get(url,data,auth){
		return this.request({
			url:url,
			data:data,
			auth:auth,
			method: "GET"
		})
	},
	post(url,data,auth){
		return this.request({
			url:url,
			data:data,
			auth:auth,
			method: "POST"
		})
	},
	getToken(url,data){
		return this.requestToken({
			url:url,
			data:data,
			method: "POST",
			header: {
				'content-type':'application/x-www-form-urlencoded',
				'Authorization':'Basic emh1emFvY2xvdWQ6MTIzNDU2'
			}
		})
	}
}
//请求拦截器
const beforeRequest = (config) => {
	//请求前代码
	console.log('请求拦截器: ',config)
	config.header = {}
	//判断该接口请求是否需要携带token
	if(config.auth){
		if(uni.getStorageSync('token')){
			//在请求头中添加token
			config.header['Authorization'] = uni.getStorageSync('token')
		}else{
			//没有登录，无访问权限，重定向到登录页面
			uni.navigateTo({
				url:'/pages/user/login'
			})
		}
	}
	return config
}
//响应拦截器
const beforeResponse = (response) => {
	console.log('响应拦截器: ',response)
	return response
}
//异常处理器
const errorHandle = (err) => {
	console.log('网络异常,请求失败! ',err)
}

export default http