//分类模块接口封装
import http from './request.js'
export default {
	//获取分类接口
	getCategoryList(pageNn,pageSize){
		return http.get('/type/page',{'pageNn':pageNn,'pageSize':pageSize},true)
	}
}