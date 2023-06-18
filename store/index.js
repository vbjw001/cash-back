// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	//全局数据
	state:{
		token:"",
		refreshToken:"",
		userInfo:{},
		//用户是否登录
		isAuth:false
	},
	//全局计算属性
	getters:{
		
	},
	//修改数据的方法
	mutations:{
		//保存token
		saveToken(state,tokenInfo){
			console.log('state ',state)
			console.log('tokenInfo',tokenInfo)
			state.token = tokenInfo.token
			// state.refreshToken = tokenInfo.refresh_token
			//持久化数据存储
			console.log('保存数据 token',tokenInfo.token)
			uni.setStorageSync("token",tokenInfo.token)
			// uni.setStorageSync("refreshToken",tokenInfo.refresh_token)
			if(tokenInfo.token){
				state.isAuth = true
			}
			console.log('保存数据 isAuth',state.isAuth)
			uni.setStorageSync("isAuth",state.isAuth)
		},
		saveUserInfo(state,userInfo){
			state.userInfo = userInfo
			console.log('保存数据 userInfo',userInfo)
			uni.setStorageSync("userInfo",userInfo)
		}
	},
	//全局操作的方法
	actions:{
		
	}
})
export default store