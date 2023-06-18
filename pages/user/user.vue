<template>
	<view>
		<!-- 顶部布局 -->
		<view class="top_bj">
			<!--左侧 用户头像显示 -->
			<view class="user-pic">			
				<uni-icons type="person-filled" size="50"></uni-icons>
			</view>
			<!-- 右侧 用户信息 -->
			<view class="user-info" v-if='isAuth'>
				{{userInfo.userName}}：{{userInfo.iconUrl}}
			</view>
			<view class="user-info" v-else @click="navTo('/pages/user/login')">
				点击登录
			</view>
			
		</view>
		<view>
			<uni-list>
				<uni-list-item :show-extra-icon="true" showArrow :extra-icon="icon1" title="订单管理" />
				<uni-list-item :show-extra-icon="true" showArrow :extra-icon="icon2" title="地址管理" />
				<uni-list-item :show-extra-icon="true" showArrow :extra-icon="icon3" title="我的收藏" />
				<uni-list-item :show-extra-icon="true" showArrow :extra-icon="icon4" title="设置" />
			</uni-list>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				icon4: {
					color: '#ff5500',
					size: '22',
					type: 'gear-filled'
				},
				icon3: {
					color: '#55aaff',
					size: '22',
					type: 'star-filled'
				},
				icon2: {
					color: '#00aa7f',
					size: '22',
					type: 'location-filled'
				},
				icon1: {
					color: '#4cd964',
					size: '22',
					type: 'shop-filled'
				}
			}
		},
		computed:{
			...mapState(['isAuth','userInfo']),
		},
		methods:{
			navTo(url){
				if(this.isAuth){
					uni.navigateTo({
						url:url
					})
				}else{
					uni.navigateTo({
						url:'/pages/user/login'
					})
				}
				
			}
		}
	}
</script>

<style>
	.top_bj{
		height: 400upx;
		background: #00aa7f;
		display: flex;
		align-items: center;
		
		.user-pic{
			width: 150upx;
			height: 150upx;
			border-radius: 50%;
			background: #d3d8d3;
			margin: 0 50upx;
			line-height: 150upx;
			text-align: center;
		}
		
		.user-info{
			flex: 1;
			color: #d3d8d3;
			font-size: 35upx;
		}
	}
	.menu_box{
		background: #d3d8d3;
		margin: 5upx 20upx;
	}
</style>