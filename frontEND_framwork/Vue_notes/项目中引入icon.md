https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code



### font-class引用
---- 
font-class是unicode使用方式的一种变种，主要是解决unicode书写不直观，语意不明确的问题。

与unicode使用方式相比，具有如下特点：

兼容性良好，支持ie8+，及所有现代浏览器。
相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。
因为使用class来定义图标，所以当要替换图标时，只需要修改class里面的unicode引用。
不过因为本质上还是使用的字体，所以多色图标还是不支持的。
使用步骤如下：

第一步：拷贝项目下面生成的fontclass代码：
```
<link href="http://at.alicdn.com/t/font_............css"
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css
```
第二步：挑选相应图标并获取类名，应用于页面：
`<i class="iconfont icon-xxx"></i>`


### symbol引用
----
这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇文章 这种用法其实是做了一个svg的集合，与上面两种相比具有如下特点：

支持多色图标了，不再受单色限制。
通过一些技巧，支持像字体那样，通过font-size,color来调整样式。
兼容性较差，支持 ie9+,及现代浏览器。
浏览器渲染svg的性能一般，还不如png。
使用步骤如下：

第一步：拷贝项目下面生成的symbol代码：
`//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js`
第二步：加入通用css代码（引入一次就行）：
```
<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
```
第三步：挑选相应图标并获取类名，应用于页面：
```
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xxx"></use>
</svg>
```