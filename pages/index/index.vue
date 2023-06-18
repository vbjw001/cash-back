<template>
	<view class="container">
		<view class="top_box">
			<!-- 顶部的背景颜色 -->
			<view class="top_back">
				
			</view>
			<!-- 轮播图 -->
			<view class="banner">
				<uni-swiper-dot :info="banner" :current="current" mode="round"
					 field="content">
					<swiper class="swiper-box" @change="swiperChange">
						<swiper-item v-for="(item, index) in 3" :key="index">
							<view class="swiper-item" :class="'swiper-item' + index">
								<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:[1,2,3],
				current:1,
			}
		},
		methods: {
			//轮播图切换的时候执行
			swiperChange(){
				
			}
		}
	}
</script>

<style lang="scss">
	.container {
		font-size: 14upx;
		line-height: 24upx;
	}
	.top_box{
		.top_back{
			height: 400upx;
			background: #00aa7f;
		}
	}
</style>
