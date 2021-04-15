### 
```
uni.request({
				url:'https://unidemo.dcloud.net.cn/api/news',
				method:'GET',
				data:{},
				success: (res) => {
					console.log(res)
					this.news = res.data
				}
			})
            
```