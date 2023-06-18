//用户模块接口封装
import http from './request.js'
export default {
	//获取token接口
	getToken(userName,passWd){
		return http.getToken('/htzg-auth-server/oauth/token',{'username':userName,'password':passWd,'key':'1683552191746','grant_type':'password'})
	},
	//获取用户信息接口
	getUserInfo(){
		return http.get('/htzg-auth-server/user',{},true)
	},
	login(userName,password){
		return http.post('/customer/login',{'userName':userName,'password':password})
	}
}