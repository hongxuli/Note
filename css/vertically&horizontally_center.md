```
.element {    
           width: 600px;   
           height: 400px;  
           position: absolute;  
           left: 50%; 
           top: 50%;  
           margin-top: -200px;            /* 高度的一半 */ 
           margin-left: -300px;            /* 宽度的一半 */  
           border:1px solid;
   }


   .box {
        position: absolute;
        border: 1px solid black;
        width: 300px;
        padding: 10px;
        left: 50%;
        top: 20%;
        box-sizing: border-box;
        transform: translate(-50%, -20%);
}
```


transform 里的 translate偏移的百分比值是相对于自身大小的

translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动

如：translate值（50px，100px）是从左边元素移动 50 个像素，并从顶部移动 100 像素。

```css
 .element { 
        width: 600px;
        height: 400px; 
        position: absolute; 
        left: 50%; 
        top: 50%;
        transform: translate(-50%, -50%);     /* 50%为自身尺寸的一半 */
  }


.element {
         width: 600px; 
         height: 400px;
         position: absolute; 
         left: 0;
         top: 0;
         right: 0;
         bottom: 0; 
         margin: auto;
}
```