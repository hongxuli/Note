---
layout: blog-post
title: Type cocercion
tags:
  - js
date: 2020-02-10
description: compare typeof instanceof and Object.prototype.toString
---

### typeOf
return the data tyoe of a value 
number, string , boolean 
``` JS
function f() {}
typeof f
// "function"

typeof undefined
// "undefined"

typeof null // "object"

typeof window // "object"
typeof {} // "object"
typeof [] // "object"
```


### instanceof 
return a boolean shows that if object is the instance of a constructor 
``` JS
var c = new Car()
c instanceof Car  //true 
```

left side of instanceof is instance

right side of instanceof is constructor

how it's work? 
it checks if the constructor's prototype is on the __proto__ chain of the instance
``` JS
v instanceof Vehicle
// equal to 
Vehicle.prototype.isPrototypeOf(v)
```


### Object.prototype.toString
difference between toString() and Object.prototype.toString.call()
``` JS
var arr=[1,2];

arr.toString();// "1,2"

Object.prototype.toString.call(arr); //"[object Array]"

```
because Array.prototype.toString overrided the toString()

----


``` JS
console.log(Object.prototype.toString.call(123)) //[object Number]
console.log(Object.prototype.toString.call('123')) //[object String]
console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
console.log(Object.prototype.toString.call(true)) //[object Boolean]
console.log(Object.prototype.toString.call({})) //[object Object]
console.log(Object.prototype.toString.call([])) //[object Array]
console.log(Object.prototype.toString.call(function(){})) //[object Function]


```





..|typeof|instanceof|object.prototype.toString
-----|-----|-----|-----
drawback|it can not distinguish the Array and Object |only work for object, it dose not suppourt for other primitive type |