

### 固定宽高，文字超出部分，隐藏并显示省略号。
```
.topic_cont_text{
		padding: 30upx;
		colof: #999;
		background: #E1FFFF;
		max-height: 130upx;
		overflow: hidden;
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3; /** 显示的行数 **/

	}
```

### 实现展开、收起全文
```
<view class="topic_content">
	<view class="topic_cont_text">
		<template v-if="showText">
			{{topicDetail.description}}
			<text v-if="topicDetail.description !== null && topicDetail.description.length > 140" class="full_text" @click="toggleDescription">收起</text>
		</template>
		<template v-else>
			{{topicDetail.description.substr(0, 140)}}
			<text v-if="topicDetail.description !== null && topicDetail.description.length > 140" class="full_text" @click="toggleDescription">全文</text>
		</template>
	</view>
</view>
```
