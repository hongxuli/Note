动态绑定 style

<template name="home">
	<view>
		<cu-custom bgColor="bg-blue" :isBack="false"><block slot="content">首页</block></cu-custom>
		<view class="flex bg-img bg-mask flex-direction " style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 60vh;">
			<!-- 图片中的字 -->
			<view class="Top flex text-white align-center justify-center" @tap="video">
				<view class="flex flex-direction ">
					<view class="text-align flex padding-xs text-sl text-bold justify-center">
						澳通接送机
					</view>
					<view class=" flex  padding-xs text-sm solid-bottom solid-top justify-center">
						境外华人司导·开车带你游世界
					</view>
					<view class="flex padding-xs text-sm justify-center ">
						AOTONG
					</view>
					<view class="flex padding-xs text-sm justify-center margin-top-xs text-gray">
						视频介绍 >>
					</view>
				</view>
			</view>
			
			<!-- 底下两个模块 -->
			<view class="Bottom grid col-2 text-white ">
				<view class="flex flex-direction text-white align-center justify-center shadow-blur" @click="toPickup">
					<i class='iconfont'>&#xe669; </i>
					<text>接送机</text>
				</view>
				<view class="flex flex-direction text-white align-center justify-center shadow-blur" @click="toReserve" >
					<uni-icons class="iconfont">&#xe6fe;</uni-icons>
					<text>境外约车</text>
				</view>
			</view>
			
			<!-- 底下四个模块 -->
			<view class="bg-white padding intro" >
				<view class="grid margin-bottom text-center col-2"   >
					<view class="padding" v-for="(item,idx) in Info" :style="block(idx)" >
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self = this
	export default {
		data() {
		return {
				PageCur: 'basics',
				Info: [{
						title:"一价全包",
						sub: ["无隐形消费","价格透明，拒绝隐形消费","安全快捷支付","使用微信支付，省去您兑换货币和计算汇率的繁琐过程"]},
						{
						title:	"视频引导",
						sub:["国内机场","国际机场"],
						},
						{
						title:"华人司机",
						sub:["确保司机服务质量",
						"全华人司机团队，降低沟通成本，确保与您的沟通顺畅",
						"对司机违规行为的严肃处罚",
						"违规频繁的司机，澳通接送机将会与其解除合作"]
						},
						{
						title:"服务保障",
						sub:["先行赔付保障服务质量",
						"若服务行程中，因平台或司导问题，未按照之前规则进行服务或服务质量不佳(诸如司机迟到，以及过程中发生纠纷等)引发的投诉，客服会第一时间介入进行解决，核实情况后，会给予您相应赔偿",
						"客服保障",
						"澳通接送机客服团队7×24小时无休，您可以通过在线客服、电话或微信联系我们，即时解决问题"]	
						},
					]
			}
		},
		filters:{
			idxStyleFilter(idx){
				
				return {  backgroundColor: red}
				// let style =""
				// if(idx<=1){
				// 	style += "border-bottom: solid 1px red;"
				// }
				// if(idx%2==1){
				// 	style += "border-left: solid 1px red;"
				// }
				// return style
			}
		},
		computed:{
			block(idx){
				return {
					 backgroundColor: red
				}
			}
		},
		mounted(){
			console.log(this.$refs.block)
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			toPickup: function() {
				uni.navigateTo({
					url: '/pages/jiesong/jiesong',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toReserve: function() {
				uni.navigateTo({
					url: '/pages/yuding/yuding',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			video: function() {
				uni.navigateTo({
					url: '/pages/video/video',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toLogin: function(e) {
				var t = this;
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					// 获取用户信息
					uni.getUserInfo({
					  provider: 'weixin',
					  success: function (infoRes) {
						 uni.request({
							url: 'https://aotongjsj.cn/api/login', 
							data: {
								userInfo: infoRes.userInfo,
								code: loginRes.code
							},
							method : 'POST',
							success: (res) => {
								console.log(res.data.data)
								uni.setStorageSync('wx_user', res.data.data);
							},
							fail: (res) => {
								console.log(res)
								
							}
						});
					  }
					});
				  }
				});
			},
		},
		onLoad(option) {
			let _self = this;
			
			this.toLogin();
			
			uni.showShareMenu();
		},
	}
</script>

<style scoped lang="scss">
	.solid-bottom::after {
		border-bottom: 1upx  #FFFFFF solid ;
	}
	.solid-top::after {
		border-top: 1upx #FFFFFF solid ;
	}
	.Bottom{
		flex-grow: 1;
	}
	.Top{
		flex-grow: 3;
		
	}
	// .shadow-blur-actived{
	// 	background: hsla(0,0%,100%,.3);
	// }
	.shadow-blur{
		position: relative; 
		background: hsla(0,0%,100%,.3);
	}
	.text-align{
		text-align: justify;
	}
	.intro{
		display: flex;
		
	}



</style>
