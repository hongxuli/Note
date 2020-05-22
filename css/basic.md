### width:auto和width:100%的区别
一、width：auto

 

1、块级元素默认的宽度值，意味着浏览器会自己选择一个合适的宽度值。

2、内容的宽度='margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right'

如果margin-left' + 'border-left-width' + 'padding-left' + 'padding-right' + 'border-right-width' + 'margin-right'比较大，就减小width的值，如果比较小呢，就增大width的值，使其满足上面的表达式。

 

二、width:100%

 

当width设置为100%之后，它的宽度就是父级的width，并且随着父级的width自动变化，增加子元素的padding和margin之后，它的width还是不变的，这是与设置为auto的区别
1、width:100% 并不包含margin-left  margin-right的属性值，直接取其父容器的宽度加上含margin-left /margin-right的值。如果设置了margin那新的width值是容器的宽度加上margin的值。就会发现加了  margin相对应的边就会多出设置的空白。而且会多出横向滚动条因为宽度已经超出了屏幕的范围，(这条相对于父容器是body)。

2、width:auto包含margin-left/margin-right的属性值。width:auto总是占据整行，这其中margin的值已经包含其中了，如果要设置margin的值那就用一整行然后减去margin的值就得到了现在的宽度了。减去的这个值就是相应边得空白。显著的特征是这个没有横向滚动条出现也就是宽度没有增加。

3、一般width:auto使用的多，因为这样灵活，而width:100%使用比较少，因为在增加padding或者margin的时候，容易使其突破父级框，破环布局。


### hight 100% 问题
对于width属性，父元素width为auto,其百分比值也是支持的；但是对于height属性，其父元素为height为auto，只要子元素在文档流中，其百分比值完全被忽略了。

height:100%无效的原因就是：规范中规定了如果包含块的高度没有显示指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为auto。则 'auto' * 100% = NAN, 算不了嘛！
但是width的解释却是： 如果包含块的宽度取决于该元素的宽度，那么产生的布局在CSS2.1中是未定义的。
对于“未定义行为”，浏览器根据自己的理解去发挥，据测试，布局效果在各个浏览器下都是一致的。这时的width值，于是就按照包含块真实的计算值作为百分比基数去计算了


### calc()  千万别写成 calc ()  空格   运算符之间有空格