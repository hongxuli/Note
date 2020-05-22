
parasitic combination inheritance

``` JS
function Parent (name){
    this.name = name
}
Parent.prototype.sayName = function(){
    console.log(this.name)
}

function Child(name,age){
    Parent.call(this,name)
    this.age = age
}

function inheritance(resource,dest){
    var prototype = object(resource.prototype)  // 注意需要创建
    // var prototype = resource.prototype     不能仅仅指向
    dest.prototype = prototype
    prototype.constructor =  dest
}
```
