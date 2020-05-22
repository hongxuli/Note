跳转到非tabbar 页面   保留老页面 一般用于需要返回
```
	uni.navigateTo({  
					url
				}) 
```
跳转界面获得参数
```
onLoad(option){
    log(option)
}
```

关闭当前页面,返回上一级或者多级页面.可以通过getCurrentPages()获取当前的页面栈,决定返回几层
```
	uni.navigateBack({  
					url
				}) 
```

跳转到非tabbar 页面   关闭当前页面,跳转到应用内的某个页面
```
	uni.redirectTo({  
					url
				}) 
```

跳转到在tabbar 注册的页面
```
	uni.switchTab({  
					url
				}) 
```

关闭所有页面,打开到应用内的某个页面
跳转到非tabbar 页面   保留老页面 一般用于需要返回
```
	uni.reLaunch({  
					url
				}) 
```