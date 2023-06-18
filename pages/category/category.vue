<template>
	<view>
		<!-- <uni-list>
		 	<uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
		 	 thumb-size="lg" rightText="右侧文字"></uni-list-item>
		</uni-list> -->
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			getData(){
				console.info('进入')
				this.qin()
			},
			async qin(){
				const response = await this.api.category.getCategoryList(1,20);
				console.log('返回数据',response)
			}
		}
	}
</script>

<style>
</style>