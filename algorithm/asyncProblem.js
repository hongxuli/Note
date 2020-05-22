async function request() {
    return new Promise(res=>{
        function callback() {
            console.log(1);
            res(2)
          }
        //   两个结果不同
        // setTimeout(callback, 100); 
        setTimeout(callback(), 100); 
        console.log(3);
    })
  }

const result = request();
console.log(result);
console.log(4);

