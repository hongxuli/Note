var synchronousFile = function (id) {  
    console.log('synchronizing file'+id);
}

var proxySynchronousFile = (function () {
    var cache = [],
    timer
    return function (id) {
        cache.push(id)
        if(timer){
            return 
        }
        timer = setTimeout(() => {
            synchronousFile(cache.join(',')) // send the array of Id need to sync
            clearTimeout(timer) // clear timer
            timer = null
            cache.length = 0 // clear id set
        }, 2000);
      }
  })()


var checkBox = document.getElementsByTagName('input')
for(let i = 0, c; c = checkbox[i++];){
    c.onclick = function () {
        if(this.checked === true){
            proxySynchronousFile(this.id)
        }
      }
}