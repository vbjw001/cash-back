<template>
	<view class="main_box">
		<view>
			<view class="title">LOGIN</view>
			<view class="login_box">
				<!-- 登录表单 -->
				<uni-forms ref="loginRef" :rules="rules" :model="loginForm">
					<uni-forms-item name="userName">
						<uni-easyinput :style="inputStyle" prefixIcon="person" v-model="loginForm.userName" placeholder="请输入账号" />
					</uni-forms-item>
					<uni-forms-item name="password">
						<uni-easyinput :style="inputStyle" prefixIcon="locked" type="password" v-model="loginForm.password" placeholder="请输入密码" />
					</uni-forms-item>
				</uni-forms>
				<button type="default" @click="submitLogin">登  录</button>
				<!-- 忘记密码 -->
				<view class="forgetPwd">忘记密码?</view>
			</view>
			<!-- 没有账号，注册 -->
			<view class="register">还没有账号?<text @click="toRegister">马上注册!</text></view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return {
				//输入框样式
				inputStyle:{
					color:'#55aa00',
					borderColor:'#55aa00'
				},
				loginForm:{
					userName:"",
					password:""
				},
				// 校验规则
				rules: {
					userName: {
						rules: [{
							required: true,
							errorMessage: '账号不能为空'
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '密码不能为空'
						}]
					}
				}
			}
		} ,
		methods:{
			...mapMutations(['saveToken','saveUserInfo']),
			//点击登录
			submitLogin(){
				//校验请求参数，发送请求
				this.$refs.loginRef.validate().then(res => {
									console.log('success', res);
									this.getToken()
								}).catch(err => {
									console.log('err', err);
								})
			},
			async getToken(){
				const response = await this.api.user.login(this.loginForm.userName,this.loginForm.password)
				console.log('response', response);
				if(response.statusCode == 200){
					console.log('success', response.data);
					this.saveToken(response.data.data)
					this.saveUserInfo(response.data.data.customerInfo)
					uni.navigateBack()
				}else{
					//提示登录失败
					uni.showToast({
						title:'用户名或密码错误!',
						duration:2000,
						icon:'error',
						position:'center'
					})
				}
			},
			toRegister(){
				uni.navigateTo({
					url:'/pages/user/register'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.main_box{
		height: 100vh;
		width: 100vw;
		//设置背景图片
		background: url('../../static/login_bk.jpg');
		//拉伸图片覆盖整个页面
		background-size: cover;
	}
	.title{
		font-size: 140upx;
		color: #ffffff;
		position: relative;
		top: 300upx;
	}
	.forgetPwd{
		color: #55aa00;
		text-align: left;
		height: 100upx;
		line-height: 100upx;
	}
	.login_box{
		position: relative;
		top:500upx;
		margin: 0 40upx;
		button{
			background: #55aa00;
			color: #fff;
			width: 100%;
			border-radius: 45upx;
		}
		uni-easyinput{
			box-shadow: 0 0 5upx #55aa00;
		}
	}
	.register{
		position: absolute;
		bottom: 50upx;
		width: 100%;
		font-size: 30upx;
		text-align: center;
		color: #ffffff;
		text{
			color: #55ffff;
		}
	}
	.inputStyle{
		
	}
</style>