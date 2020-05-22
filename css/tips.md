对于初学者一定要做的事（一直到你真正熟练运用CSS才可省略步骤1）：

1，给所有“标签”都要写“border”线，直到整段代码写完，并确认没问题才去掉“border”线

（目的是让肉眼可以看到框的具体占用的位置，同时理解属性的功能。注意：此方法比较老土，在IE6时代比较适用。如今：一定要熟练使用浏览器的F12快捷键，熟练掌握审查元素功能，对你学习非常有帮助。）

2，“从外到内”的思路。（目的是清晰思路，知道怎样去实现拼图）

代码使用技巧（什么时候使用他们）：

1，边框 border 代替网页中的线条；(IE6时代：另外主要用于调试时，帮助理解代码时使用)

2，宽度 width 所有“块”标签，都要写宽度。(除非你真正理解“继承”)

3，高度 height “块”标签高度是固定时才使用，其他时绝对不要写height，容易出兼容性问题。

4，外边距 margin “块”标签居中时；另外“块”标签之间有间距时使用（不要动不动就乱加margin）

5，内边距 padding “块”标签与内部文字之间的间距（紧记他与width和height之间的尺寸关系，非常重要）

6，浮动 float “块”标签按列排版时使用（紧记2列时建议left right,3列时left left right，还有不清除浮动会造成的问题，以及解决办法，这个标记非常重要，精通css，必先掌握之）

7，背景 background “块”标签中图片做为背景时使用（这个标记非常重要，精通css，必先掌握之）

8，定位 position 浮动实现不了或难以实现的布局，如：某些导航（使用不多，可先掌握background后，再掌握之）

9，行高 line-height 对文字排版时都要用到（注意：不是line-height height一定要一起用，这是错误的理解）

10，缩进 text-indent 文本缩进时使用（只左边文字缩进时，尽量使用text-indent，而不是使用padding-left）

11，列表 list-style 一般用于清除li属性时使用（如：li{list-style:none}）

12，居中 text-align 通常用于文本居中 （注意：“块”居中用marong:auto；文本居中用text-align:center）

13，溢出 overflow 通常用于“不显示超过对象尺寸的内容”，以及定义块标签“显示滚动条”

14，显示 display 通常三种用途 1.隐藏某一块内容；2.转换成“块”标签；3.转换成“内联”标签

15，可见性 visibility 和display:none类似，用于隐藏某一块内容，但保留占用空间（使用非常少）

技巧代码（经验的积累）：

1，一定要掌握代码的初始化写法，这个写好了，能解决以后写代码的很多问题

2，overflow:hidden; 这种写法能解决浮动高度问题；还能解决内部尺寸大，把网站撑破的问题

3，display:inline;float:left; 用于解决ie6 margin间距双倍问题。

4，word-wrap:break-word 或 word-break:break-all; 用于解决长英文字母把网站撑出问题

需要背下来的：

长度单位，如：px em

颜色单词，如：red blue yellow

颜色十六进制，如：#FF0000 #FFFFFF

（只需要背几个常用的就可以了，以上内容具体可查看“CSS2.0中文手册.chm”）

另外几个非重点代码：

伪类 :link(只做了解，不推荐写代码时使用) :hover :visited

规则 @import @charset 这两个一般不使用，但看到别人写这个代码要明白什么意思

声明 !important 一般不使用，特殊情况使用

表格 border-collapse border-spacing 能代替table标签的两个属性

关于浏览器兼容性：

我推荐写代码时,尽量用所有浏览器都支持的写法。（这需要对css属性的深刻理解和一定经验）

对于选择器前加 _ + * if 之类的兼容性写法尽量不用或少用（虽然不推荐兼容性写法，但要知道，以备不时之需）