### 两种方法实现页面的跳转
- 一个是将页面用navigator 标签包裹起来  `<navigator url='where you want to head to'>`
- 给目标绑定 @tap 的方法 
```
@tap=jumpto

<!-- 在onload 里的method定义 jumpto 方法  -->
jumpto(){
    <!-- 代码块 -->
    uni.navigatiTo({
        url: 'target url'
    })
}
```
### 传参 
- 在目标上绑定参数  :data-newsid="item.id"   例子是绑定在一个v-for的循环节点上
```
<!-- 通过e传递参数 -->
jumpto(e){
    var newsid = e.currentTarget.dataset.newsid
    <!-- 代码块 -->
    uni.navigatiTo({
        url: 'target url'+ newsid
    })
}
```

