

var CreateDiv = (function () {  
    var instance

    // 构造函数  在闭包里引用了 instance 来记录状态
    var CreateDiv = function (html) {
        //  it not good to mix them together 
        if(instance){
            return instance
        }
        this.html = html
        this.init()

        return instance = this
      }

    //   给原型添加方法
      CreateDiv.prototype.init = function () {  
          var div = document.createElement('div')
          div.innerHTML = this.html
          document.body.appendChild(div)
      }

    //   返回构造函数
      return CreateDiv
 })()


 var a = new CreateDiv('sven1')
 var b = new CreateDiv("sven2");



//  better to use proxy to manage singleton , so the CreateDiv could be a regular class
 var ProxySingletonCreateDiv = (function () { 
     var instance
     return function (html) {
         if( !instance){
             instance = new CreateDiv(html)
         }
         return instance 
       }
  })()


//   common singleton function 
var getSingleton = function (fn) {
    var result 
    return function () { 
        return result || (  result = fn.apply(this, arguments))
     }
  }
 
