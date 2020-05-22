var objectFactory = function () {
    var obj = new Object()  
    // clone a empty object  from Object.prototype

    Constructor = [].shift.call(arguments) 
    // get constructor from outside( here is Person)

    obj.__proto__ = Constructor.prototype 
    // make pointer point to the right prototype
    // make obj.__proto__ point to Person.prototype instead of Object.prototype in this example 
s
    var ret = Constructor.apply(obj, arguments) 
    // use the outside constructor to set properties to new object

    return typeof ret === 'object' ? ret: obj // make sure constructor always return object 
}


function Person(name) { 
    this.name = name
 }
 Person.prototype.getName = function () { 
     return this.name
 }


 var a = objectFactory(Person, 'sven')   
 

console.log(a.name); // sven
console.log(a.getName()); // sven 
console.log(object.getPrototypeOf(a) === Person.prototype); // true


// same result 
// var a = objectFactory(A, 'sven') 
// var a = new A("sven");



